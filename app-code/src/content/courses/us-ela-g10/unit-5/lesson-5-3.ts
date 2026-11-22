import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const SOURCE: TextExtract = {
  title: "Informational Text: Evaluating Sources for Research",
  author: "Written for Akademik Space",
  text: "When researching a topic, you encounter sources of wildly varying quality. A Wikipedia article on climate change is accessible and broadly accurate — but it's a tertiary source summarizing other sources. The original research it cites is a primary source. A news article about the research is secondary — it interprets findings for general audiences.\n\nSource evaluation questions: **Who wrote it?** A scientist at NOAA writing about climate data has different credibility than an anonymous blog post. **What's the publication?** Peer-reviewed journals require expert review; blogs don't. **When was it written?** Climate science from 1990 misses two decades of data. **What's the purpose?** Advocacy organizations have legitimate perspectives but different standards than peer-reviewed research.\n\nStrong research synthesizes multiple source types: primary sources for original data, secondary sources for context, authoritative reports for policy implications. The best research isn't just well-sourced — it's transparent about source limitations and acknowledges where evidence is contested.",
};

const BIAS: TextExtract = {
  title: "Informational Text: Detecting Bias and Framing",
  author: "Written for Akademik Space",
  text: "The same event can be reported very differently depending on framing. Consider coverage of a school start time change: a local newspaper might frame it as 'District changes schedule to improve student health' — focusing on benefits. A parents' association website might frame it as 'District ignores working parents' childcare needs' — focusing on costs. Both are factually accurate; neither is 'wrong.'\n\nFraming affects perception through: **word choice** ('change' vs 'disruption'), **emphasis** (health benefits vs logistical problems), **omission** (not mentioning opposition arguments), **source selection** (quoting supporters vs critics). Critical readers ask: what perspective is being presented? What's being left out? How would the story change with a different frame?\n\nBias isn't always intentional — it can be structural (whose voices are heard?) or unconscious (what assumptions underlie the framing?). Recognizing bias doesn't mean dismissing sources; it means reading critically and seeking multiple perspectives.",
};

export const lesson53: Lesson = {
  id: "ela10-u5-lesson-5-3",
  code: "5-3",
  title: "Source Evaluation, Bias Detection, and Research Synthesis",
  goal: "I CAN evaluate source credibility, detect bias and framing, and synthesize information from multiple sources.",
  standards: ["RI.9-10.6", "RI.9-10.9", "W.9-10.7", "W.9-10.8", "W.9-10.9"],
  vocabulary: [
    { term: "Primary source", definition: "Original research/data." },
    {
      term: "Secondary source",
      definition: "Interpretation of primary sources.",
    },
    { term: "Tertiary source", definition: "Summary of secondary sources." },
    { term: "Framing", definition: "How information is presented/emphasized." },
    { term: "Selection bias", definition: "Citing only supporting sources." },
    {
      term: "Synthesis",
      definition: "Combining sources into new understanding.",
    },
  ],
  concepts: [
    {
      id: "ela10-u5-sources",
      title: "Source types and credibility evaluation",
      skill:
        "Distinguish primary/secondary/tertiary sources and evaluate credibility.",
      lesson: {
        sections: [
          {
            heading: "Source hierarchy",
            body: "Primary sources = original research, raw data, first-hand accounts (peer-reviewed studies, government reports). Secondary sources = interpretations of primary sources (news articles, textbooks). Tertiary sources = summaries of secondary sources (Wikipedia, encyclopedias). For climate change: original NOAA data (primary) → journal article analyzing it (secondary) → news report (tertiary). Each has different credibility and purpose.",
          },
          {
            heading: "Credibility questions",
            body: "Ask: **Who?** Author credentials and expertise. **Where?** Publication venue and standards. **When?** Currency — is information current? **Why?** Purpose and motivation — informing, persuading, selling? **How?** Methodology and evidence quality. A peer-reviewed climate study outranks a blog post; a 2023 report outranks 1990 data on evolving topics.",
          },
        ],
        keyFormulas: [
          {
            name: "Source types",
            statement: "Primary → secondary → tertiary.",
          },
          { name: "Five questions", statement: "Who, where, when, why, how." },
          {
            name: "Hierarchy of credibility",
            statement: "Peer-reviewed > journalism > blogs.",
          },
        ],
        workedExample: {
          problem:
            "How would you evaluate a source for a climate research paper?",
          solution:
            "Check: Who (scientist at NOAA?), Where (peer-reviewed journal?), When (recent?), Why (informing, not selling?), How (methodology sound?). Prefer primary/secondary over tertiary.",
        },
      },
      questions: [
        {
          id: "ela10-u5-sources-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SOURCE,
          stem: "What's the difference between primary and secondary sources?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No difference" },
              { id: "b", text: "Primary is always better" },
              { id: "c", text: "Secondary is more credible" },
              {
                id: "d",
                text: "Primary = original research; secondary = interpretation",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary vs secondary",
                statement: "Original vs interpretation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Primary = original research/data; secondary = interpretation of primary sources.",
                evidence: "definition",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Primary = original research; secondary = interpretation.",
            commonErrors: ["Confusing source types."],
          },
        },
        {
          id: "ela10-u5-sources-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SOURCE,
          stem: "Apply the five credibility questions to a Wikipedia article on climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source evaluation",
                statement: "Five questions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Who: anonymous editors — no single author credentials.",
                evidence: "who",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Where: Wikipedia — tertiary source, not peer-reviewed.",
                evidence: "where",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "When/Why/How: may be current but summarizes others' work — check citations for primary sources.",
                evidence: "when/why/how",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Who: anonymous editors. Where: Wikipedia (tertiary). When/Why/How: current but summarizes — check citations for primary sources. Use as starting point, not final source.",
            commonErrors: [
              "Accepting Wikipedia as authoritative without checking citations.",
            ],
          },
        },
        {
          id: "ela10-u5-sources-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SOURCE,
          stem: "Analyze why strong research synthesizes multiple source types rather than relying on one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research synthesis",
                statement: "Multiple sources.",
              },
              {
                kind: "skill",
                name: "Source triangulation",
                statement: "Cross-verification.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Primary sources provide original data — foundation for claims.",
                evidence: "primary",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Secondary sources provide context/interpretation — help understand primary findings.",
                evidence: "secondary",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Multiple sources enable triangulation — cross-verify claims, identify consensus/contestation.",
                evidence: "triangulation",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Strong research synthesizes multiple source types: primary for original data, secondary for context, authoritative reports for policy. Enables triangulation — cross-verifying claims, identifying consensus vs contested areas, acknowledging limitations.",
            commonErrors: ["Relying on single source type."],
          },
        },
        {
          id: "ela10-u5-sources-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SOURCE,
          parts: [
            { label: "a", prompt: "What is a tertiary source?", marks: 2 },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tertiary source",
                statement: "Summary of summaries.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Source summarizing secondary sources — encyclopedia, textbook.",
                evidence: "tertiary",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Example: Wikipedia article on climate change.",
                evidence: "Wikipedia",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Summarizes secondary sources — encyclopedia/textbook. (b) Wikipedia.",
            commonErrors: ["Confusing with primary/secondary."],
          },
        },
      ],
    },
    {
      id: "ela10-u5-bias",
      title: "Detecting Bias and Framing",
      skill:
        "Identify how framing and bias affect information presentation and reader perception.",
      lesson: {
        sections: [
          {
            heading: "Framing mechanisms",
            body: "Same event, different frames: 'District improves student health' vs 'District ignores working parents.' Both accurate; neither 'wrong.' Framing operates through: **word choice** ('change' vs 'disruption'), **emphasis** (benefits vs costs), **omission** (leaving out counterarguments), **source selection** (quoting supporters vs critics). Critical readers ask: what's the frame? What's omitted? How would story change with different frame?",
          },
          {
            heading: "Bias types",
            body: "Bias isn't always intentional: **structural** (whose voices are heard?), **unconscious** (assumptions underlying framing), **selection** (only supporting sources), **confirmation** (presenting what audience expects). Detecting bias doesn't mean dismissing sources — means reading critically and seeking multiple perspectives. The goal isn't 'unbiased' (impossible) but 'aware of perspective.'",
          },
        ],
        keyFormulas: [
          {
            name: "Framing = emphasis",
            statement: "What gets highlighted vs omitted.",
          },
          {
            name: "Bias types",
            statement: "Structural, unconscious, selection, confirmation.",
          },
          { name: "Aware ≠ unbiased", statement: "Recognize perspective." },
        ],
        workedExample: {
          problem: "How does the school start time story differ by framing?",
          solution:
            "'Improves student health' emphasizes benefits; 'ignores working parents' emphasizes costs. Both accurate — framing determines emphasis, not truth.",
        },
      },
      questions: [
        {
          id: "ela10-u5-bias-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: BIAS,
          stem: "What is 'framing' in information presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Visual design" },
              { id: "b", text: "Lying" },
              { id: "c", text: "Technical formatting" },
              { id: "d", text: "How information is emphasized/omitted" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Framing",
                statement: "Emphasis/omission.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Framing = how information presented — word choice, emphasis, omission.",
                evidence: "framing",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. How information is emphasized/omitted.",
            commonErrors: ["Confusing framing with lying."],
          },
        },
        {
          id: "ela10-u5-bias-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: BIAS,
          stem: "Identify two framing mechanisms in the school start time example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Framing analysis",
                statement: "How frames work.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Word choice: 'change' vs 'disruption' — same event, different connotation.",
                evidence: "word choice",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Emphasis: health benefits vs childcare costs — different priorities highlighted.",
                evidence: "emphasis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Source selection: supporters vs critics quoted — perspective determines voices heard.",
                evidence: "source",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Word choice ('change' vs 'disruption'), emphasis (benefits vs costs), source selection (supporters vs critics).",
            commonErrors: ["Thinking framing = lying."],
          },
        },
        {
          id: "ela10-u5-bias-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: BIAS,
          stem: "Analyze why detecting bias doesn't mean dismissing sources — how can you read biased text critically?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Critical reading",
                statement: "Bias awareness.",
              },
              {
                kind: "skill",
                name: "Multiple perspectives",
                statement: "Seek balance.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Bias ≠ falsehood — biased sources still contain accurate information.",
                evidence: "bias ≠ false",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Critical reading: identify frame, note omissions, seek counter-sources.",
                evidence: "critical",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Goal: aware of perspective, not 'unbiased' (impossible) — triangulate multiple views.",
                evidence: "aware",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Detecting bias doesn't mean dismissing sources — biased text still contains accurate information. Critical reading: identify frame, note omissions, seek counter-sources. Goal is awareness of perspective, not impossible 'unbiased' — triangulate multiple views.",
            commonErrors: ["Thinking biased = worthless."],
          },
        },
        {
          id: "ela10-u5-bias-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: BIAS,
          parts: [
            { label: "a", prompt: "What's 'structural bias'?", marks: 2 },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structural bias",
                statement: "Systemic perspective.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Bias embedded in systems/institutions — whose voices are heard.",
                evidence: "structural",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: news media historically quoting more male experts than female.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Bias embedded in systems/institutions. (b) News media quoting more male than female experts.",
            commonErrors: ["Confusing with individual bias."],
          },
        },
      ],
    },
    {
      id: "ela10-u5-synthesis",
      title: "Research Synthesis and Writing About Sources",
      skill:
        "Synthesize information from multiple sources into coherent research writing.",
      lesson: {
        sections: [
          {
            heading: "Synthesis vs summary",
            body: "Summary = restate what sources say. Synthesis = combine sources into new understanding. For school start times: Source A (AAP) says biology requires later start; Source B (Seattle data) shows outcomes; Source C (parents) raises childcare concerns. Synthesis: 'Research supports later start times biologically and empirically, but implementation requires addressing childcare/logistics.' Combines sources, identifies tensions, creates new understanding.",
          },
          {
            heading: "Writing about sources",
            body: "Effective synthesis: **attribute claims** ('According to AAP...', 'Seattle data shows...'), **compare perspectives** ('While research supports X, implementation faces Y'), **identify patterns** ('Multiple sources converge on...'), **acknowledge limits** ('Evidence is limited on...'). Avoid: 'Source A says X. Source B says Y.' — that's listing, not synthesizing.",
          },
        ],
        keyFormulas: [
          {
            name: "Synthesis = new understanding",
            statement: "Not just restating.",
          },
          { name: "Attribute claims", statement: "'According to...'" },
          {
            name: "Identify patterns",
            statement: "'Multiple sources converge...'",
          },
        ],
        workedExample: {
          problem: "How would you synthesize sources on school start times?",
          solution:
            "'Research supports later start times: AAP cites adolescent biology, Seattle data shows improved outcomes. However, implementation faces childcare/logistics barriers identified by parents' groups.'",
        },
      },
      questions: [
        {
          id: "ela10-u5-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SOURCE,
          stem: "What's the difference between summary and synthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Synthesis is longer" },
              { id: "b", text: "Summary is better" },
              { id: "c", text: "No difference" },
              {
                id: "d",
                text: "Summary = restate; synthesis = combine into new understanding",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis vs summary",
                statement: "Restate vs combine.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Summary restates; synthesis combines sources into new understanding.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Summary = restate; synthesis = combine into new understanding.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "ela10-u5-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SOURCE,
          stem: "How would you synthesize sources on school start times?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source synthesis",
                statement: "Combine into understanding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify convergence: AAP biology + Seattle outcomes both support later start.",
                evidence: "convergence",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Identify tension: research supports change but parents raise childcare concerns.",
                evidence: "tension",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesize: 'Research supports later start biologically/empirically, but implementation requires addressing logistics.'",
                evidence: "synthesize",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Research supports later start times: AAP cites biology, Seattle shows outcomes. But implementation faces childcare/logistics barriers.'",
            commonErrors: ["Listing sources instead of synthesizing."],
          },
        },
        {
          id: "ela10-u5-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SOURCE,
          stem: "Analyze why 'Source A says X. Source B says Y.' is summary, not synthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis vs listing",
                statement: "What makes synthesis.",
              },
              {
                kind: "skill",
                name: "Integration",
                statement: "Combining sources.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Listing = juxtaposition — sources presented side-by-side without connection.",
                evidence: "listing",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesis = integration — identifies convergence, tension, patterns across sources.",
                evidence: "synthesis",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: 'Multiple sources converge on X, but Y remains contested' — creates new understanding.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Source A says X. Source B says Y.' is listing — juxtaposition without connection. Synthesis integrates: 'Multiple sources converge on X, but Y remains contested' — identifies patterns, creates new understanding.",
            commonErrors: ["Thinking listing = synthesis."],
          },
        },
        {
          id: "ela10-u5-synthesis-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SOURCE,
          parts: [
            {
              label: "a",
              prompt: "What does 'triangulation' mean in research?",
              marks: 2,
            },
            { label: "b", prompt: "Why is it valuable?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triangulation",
                statement: "Cross-verification.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Cross-verifying claims across multiple sources.",
                evidence: "triangulation",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Identifies consensus, contested areas, source limitations.",
                evidence: "value",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Cross-verifying claims across multiple sources. (b) Identifies consensus, contested areas, limitations.",
            commonErrors: ["Confusing with triangulation in navigation."],
          },
        },
      ],
    },
    {
      id: "ela10-u5-integrated",
      title: "Integrated Informational Text Analysis Practice",
      skill:
        "Apply source evaluation, bias detection, and synthesis in comprehensive informational text practice.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive approach",
            body: "Analyzing informational texts requires: **source evaluation** (who/where/when/why/how?), **bias detection** (what's framed/emphasized/omitted?), **synthesis** (how do sources relate?). For school start times: sources range from AAP (authoritative) to parents' groups (stakeholder); framing differs (health vs childcare); synthesis reveals tension between research and implementation.",
          },
          {
            heading: "Exam application",
            body: "Exam questions often require: 'Evaluate the credibility of sources used' or 'Analyze how framing affects presentation.' Requires applying multiple skills: source hierarchy, bias detection, synthesis. Practice combining rather than analyzing separately.",
          },
        ],
        keyFormulas: [
          {
            name: "Three skills",
            statement: "Source eval + bias + synthesis.",
          },
          {
            name: "Comprehensive = integrated",
            statement: "How they work together.",
          },
          { name: "Exam synthesis", statement: "Combine analysis types." },
        ],
        workedExample: {
          problem:
            "How would you comprehensively analyze sources on school start times?",
          solution:
            "Evaluate sources (AAP vs parents' groups) → detect framing (health vs childcare emphasis) → synthesize (research supports change, implementation faces barriers).",
        },
      },
      questions: [
        {
          id: "ela10-u5-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SOURCE,
          stem: "What three skills are needed for comprehensive informational text analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only vocabulary" },
              { id: "b", text: "Only data" },
              {
                id: "c",
                text: "Source evaluation + bias detection + synthesis",
              },
              { id: "d", text: "Only summary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comprehensive analysis",
                statement: "Three skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Source eval + bias detection + synthesis = comprehensive analysis.",
                evidence: "three skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Source evaluation + bias detection + synthesis.",
            commonErrors: ["Thinking one skill is enough."],
          },
        },
        {
          id: "ela10-u5-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SOURCE,
          stem: "Apply source evaluation to AAP vs parents' group sources on school start times.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparative source evaluation",
                statement: "Different credibility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "AAP: medical authority, peer-reviewed research — high credibility.",
                evidence: "AAP",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Parents' group: stakeholder perspective, experiential knowledge — valuable but different.",
                evidence: "parents",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both legitimate but serve different purposes — research vs lived experience.",
                evidence: "purpose",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "AAP: medical authority, peer-reviewed — high credibility. Parents' group: stakeholder, experiential — valuable but different purpose. Both legitimate, different functions.",
            commonErrors: [
              "Dismissing stakeholder sources as 'less credible.'",
            ],
          },
        },
        {
          id: "ela10-u5-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SOURCE,
          stem: "Write a synthesis paragraph analyzing how source credibility and framing interact in school start time coverage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comprehensive analysis",
                statement: "Source + bias + synthesis.",
              },
              {
                kind: "skill",
                name: "Integrated interpretation",
                statement: "How they interact.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Source credibility: AAP authoritative, parents' groups stakeholder — different standards.",
                evidence: "credibility",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Framing: health benefits vs childcare costs — different emphases.",
                evidence: "framing",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesis: credible sources still frame differently; reader must evaluate both credibility and perspective.",
                evidence: "synthesis",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Coverage of school start times varies by source credibility and framing: AAP reports emphasize biological research (authoritative), while parents' groups emphasize childcare impacts (stakeholder perspective). Both are credible for their purposes but frame differently — health benefits vs logistical costs. Readers must evaluate both source authority and framing to understand full picture.'",
            commonErrors: ["Analyzing credibility or framing separately."],
          },
        },
        {
          id: "ela10-u5-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SOURCE,
          parts: [
            {
              label: "a",
              prompt: "Why are stakeholder sources still valuable?",
              marks: 2,
            },
            { label: "b", prompt: "How should they be used?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Stakeholder sources",
                statement: "Value + appropriate use.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Provide lived experience and practical concerns research misses.",
                evidence: "value",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Use alongside authoritative sources — complement, not replace.",
                evidence: "use",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Provide lived experience/practical concerns research misses. (b) Use alongside authoritative sources — complement, not replace.",
            commonErrors: ["Dismissing stakeholder sources entirely."],
          },
        },
      ],
    },
  ],
};
