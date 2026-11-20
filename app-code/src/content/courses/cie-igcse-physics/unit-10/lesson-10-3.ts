import type { Lesson } from "../../../types.ts";

export const lessonp103: Lesson = {
  id: "ciep-u10-lesson-10-3",
  code: "10-3",
  title: "Stars and Galaxies",
  goal: "I CAN describe stars, stellar evolution and galaxies.",
  standards: ["0655 10.3"],
  vocabulary: [
    { term: "Star", definition: "Huge ball of hot gas producing energy by fusion." },
    { term: "Galaxy", definition: "Huge group of stars, gas and dust (e.g., Milky Way)." },
    { term: "Nebula", definition: "Cloud of gas/dust where stars form." },
    { term: "Main sequence", definition: "Stable star phase burning hydrogen." },
    { term: "Red giant", definition: "Expanded cool star after hydrogen depleted." },
    { term: "White dwarf", definition: "Small dense hot remnant of low-mass star." },
    { term: "Supernova", definition: "Explosive death of massive star." },
    { term: "Black hole", definition: "Collapsed massive star — gravity prevents escape." },
  ],
  concepts: [
    {
      id: "ciep-u10-stars",
      title: "Stars and stellar evolution",
      skill: "Describe star formation, life cycle and stellar types.",
      lesson: {
        sections: [
          {
            heading: "Star formation",
            body: "Nebula (gas/dust cloud) collapses under gravity → protostar → fusion begins → main sequence star.\n\nOur Sun: main sequence, ~4.6 billion years old.",
          },
          {
            heading: "Life cycle",
            body: "- **Low mass** (like Sun): main sequence → red giant → white dwarf\n- **High mass**: main sequence → red supergiant → supernova → neutron star/black hole",
          },
          {
            heading: "Stellar properties",
            body: "- Temperature: colour (red=cool, blue=hot)\n- Brightness: apparent vs absolute magnitude\n- Distance: light years, parallax",
          },
        ],
        keyFormulas: [
          { name: "Light year", statement: "$1\\ \\text{ly} = 9.5 \\times 10^{15}\\ \\text{m}$" },
        ],
        workedExample: {
          problem: "What is the fate of a star like our Sun?",
          solution: "Low mass → red giant → sheds outer layers → white dwarf remnant.",
        },
      },
      questions: [
        {
          id: "ciep-u10-stars-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What powers a star?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fission" }, { id: "b", text: "Fusion" }, { id: "c", text: "Chemical" }, { id: "d", text: "Gravity alone" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Stars", statement: "Fusion powers stars." }],
            steps: [{ reasoning: "Recall.", working: "\\text{fusion}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Fusion",
            commonErrors: ["Not fission."],
          },
        },
        {
          id: "ciep-u10-stars-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a nebula?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Nebula", statement: "Gas/dust cloud → stars." }],
            steps: [
              { reasoning: "Cloud of gas/dust.", marks: 1, markCode: "M" },
              { reasoning: "Star formation site.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A cloud of gas and dust where stars form through gravitational collapse.",
            commonErrors: ["Not linking to star formation."],
          },
        },
        {
          id: "ciep-u10-stars-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the fate of low-mass and high-mass stars.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evolution", statement: "Low→white dwarf; high→supernova." }],
            steps: [
              { reasoning: "Low: red giant→white dwarf.", marks: 1, markCode: "M" },
              { reasoning: "High: red supergiant→supernova.", marks: 1, markCode: "M" },
              { reasoning: "Remnants differ.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Low-mass stars end as white dwarfs; high-mass stars explode as supernovae leaving neutron stars or black holes.",
            commonErrors: ["Swapping fates."],
          },
        },
        {
          id: "ciep-u10-stars-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe star formation and evolution.",
          parts: [
            { label: "a", prompt: "How stars form.", marks: 3 },
            { label: "b", prompt: "Main sequence.", marks: 3 },
            { label: "c", prompt: "End stages.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Stars", statement: "Nebula→protostar→main sequence→remnant." }],
            steps: [
              { part: "a", reasoning: "Nebula collapses.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Gravity→heat.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Fusion begins.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "H→He fusion.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Stable phase.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Red giant/supergiant.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "White dwarf/neutron/black hole.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) nebula collapse (b) H fusion stable (c) giant→remnant",
            commonErrors: ["In (a) not mentioning gravity."],
          },
        },
      ],
    },
    {
      id: "ciep-u10-galaxies",
      title: "Galaxies and the universe",
      skill: "Describe galaxies, the Milky Way and expanding universe.",
      lesson: {
        sections: [
          {
            heading: "Galaxies",
            body: "Huge collections of stars, gas, dust held by gravity.\n\n- **Milky Way**: our galaxy, ~100 billion stars\n- Types: spiral, elliptical, irregular\n- Billions of galaxies in observable universe",
          },
          {
            heading: "Expanding universe",
            body: "Galaxies moving away from each other — universe expanding.\n\nEvidence: redshift (light stretched to red), cosmic microwave background.",
          },
          {
            heading: "Scale",
            body: "Distances vast: nearest star Proxima Centauri 4.2 light years.\n\nLight year = distance light travels in 1 year = 9.5×10¹⁵ m.",
          },
        ],
        keyFormulas: [
          { name: "Light year", statement: "$1\\ \\text{ly} = 9.5 \\times 10^{15}\\ \\text{m}$" },
        ],
        workedExample: {
          problem: "Why do distant galaxies appear red?",
          solution: "Redshift — light stretched as universe expands, shifting to longer (red) wavelengths.",
        },
      },
      questions: [
        {
          id: "ciep-u10-galaxies-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is our galaxy called?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Andromeda" }, { id: "b", text: "Milky Way" }, { id: "c", text: "Whirlpool" }, { id: "d", text: "Sombrero" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Galaxy", statement: "Milky Way." }],
            steps: [{ reasoning: "Recall.", working: "\\text{Milky Way}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Milky Way",
            commonErrors: ["Andromeda is separate galaxy."],
          },
        },
        {
          id: "ciep-u10-galaxies-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What evidence shows universe is expanding?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Expansion", statement: "Redshift." }],
            steps: [
              { reasoning: "Redshift of galaxies.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Redshift — light from distant galaxies shifted to longer wavelengths, indicating they are moving away.",
            commonErrors: ["Not mentioning redshift."],
          },
        },
        {
          id: "ciep-u10-galaxies-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate distance light travels in 2 years. (1 ly = 9.5×10¹⁵ m)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Light year", statement: "d = years × 9.5×10¹⁵ m." }],
            steps: [
              { reasoning: "2 × 9.5×10¹⁵.", marks: 1, markCode: "M" },
              { reasoning: "= 1.9×10¹⁶ m.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
              { reasoning: "Unit m.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1.9×10¹⁶ m (2 light years)",
            commonErrors: ["Wrong exponent."],
          },
        },
        {
          id: "ciep-u10-galaxies-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe galaxies and expanding universe.",
          parts: [
            { label: "a", prompt: "Galaxy definition.", marks: 3 },
            { label: "b", prompt: "Our galaxy.", marks: 3 },
            { label: "c", prompt: "Expansion evidence.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Galaxies", statement: "Star groups; Milky Way; redshift." }],
            steps: [
              { part: "a", reasoning: "Stars+gas+dust.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Gravity bound.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Milky Way.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "~100 billion stars.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Redshift.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Moving apart.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) star groups (b) Milky Way (c) redshift=expanding",
            commonErrors: ["In (c) not explaining redshift."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciep-u10-stars-notes",
      title: "Stars, galaxies and universe — revision notes",
      summary: "Star formation/evolution, galaxies, expanding universe.",
      sections: [
        {
          heading: "Key facts",
          body: "Stars: fusion-powered. Low mass→white dwarf; high→supernova. Milky Way=our galaxy. Redshift=expansion. 1 ly=9.5×10¹⁵m.",
        },
        {
          heading: "Exam technique",
          body: "- Star colour=temperature.\n- Fate depends on mass.\n- Redshift means moving away.",
        },
      ],
    },
  ],
};
