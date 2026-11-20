import type { Lesson } from "../../../types.ts";

export const lesson1111: Lesson = {
  id: "olchem-u11-lesson-11-1",
  code: "11-1",
  title: "Chemical Tests",
  goal: "I CAN describe tests for gases, ions and organic compounds.",
  standards: ["5070 11.1", "5070 11.2"],
  vocabulary: [
    { term: "Flame test", definition: "Identifies metal ions by characteristic flame colour." },
    { term: "Precipitate test", definition: "Adding reagent to form coloured insoluble salt identifying ion." },
    { term: "Gas test", definition: "Specific test identifying a gas (e.g. limewater for CO₂)." },
    { term: "Litmus", definition: "Indicator for acid/alkali." },
    { term: "Damp blue litmus", definition: "Turns red in ammonia gas." },
    { term: "Glowing splint", definition: "Relights in oxygen." },
    { term: "Limewater", definition: "Turns milky with CO₂." },
    { term: "Bromine water", definition: "Decolorises with unsaturated hydrocarbons/phenol." },
  ],
  concepts: [
    {
      id: "olchem-u11-gas-tests",
      title: "Tests for gases",
      skill: "Describe and interpret tests for common gases.",
      lesson: {
        sections: [
          {
            heading: "Gas tests",
            body: "| Gas | Test | Result |\n|---|---|---|\n| O₂ | glowing splint | relights |\n| H₂ | lighted splint | squeaky pop |\n| CO₂ | limewater | turns milky |\n| NH₃ | damp red litmus | turns blue |\n| Cl₂ | damp blue litmus | bleaches white |",
          },
          {
            heading: "Collecting gases",
            body: "- **Upward delivery**: denser-than-air gases (CO₂, Cl₂).\n- **Downward delivery**: lighter gases (NH₃, H₂).\n- **Over water**: gases insoluble in water (O₂, H₂).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A gas turns limewater milky. Identify it.",
          solution: "CO₂ — reacts with Ca(OH)₂ to form insoluble CaCO₃ (milky precipitate).",
        },
      },
      questions: [
        {
          id: "olchem-u11-gas-tests-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What test identifies hydrogen gas?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Glowing splint relights" }, { id: "b", text: "Lighted splint gives squeaky pop" }, { id: "c", text: "Limewater turns milky" }, { id: "d", text: "Litmus turns blue" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "H₂ test", statement: "Squeaky pop with lighted splint." }],
            steps: [{ reasoning: "Recall.", working: "\\text{squeaky pop}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Lighted splint gives squeaky pop",
            commonErrors: ["Confusing with O₂ test."],
          },
        },
        {
          id: "olchem-u11-gas-tests-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the test for carbon dioxide.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "CO₂ test", statement: "Bubble through limewater → milky." }],
            steps: [
              { reasoning: "Method.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bubble the gas through limewater — it turns milky due to CaCO₃ precipitate.",
            commonErrors: ["Saying 'turns blue' — it's milky/white."],
          },
        },
        {
          id: "olchem-u11-gas-tests-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why ammonia is collected by downward delivery.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Gas collection", statement: "Light gases collected downward." }],
            steps: [
              { reasoning: "NH₃ less dense than air.", marks: 1, markCode: "M" },
              { reasoning: "Would escape upward collection.", marks: 1, markCode: "M" },
              { reasoning: "Downward delivery traps it.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ammonia is less dense than air, so it rises — downward delivery (gas jar inverted or delivery tube reaching bottom) prevents escape.",
            commonErrors: ["Saying it's 'heavy' — it's lighter than air."],
          },
        },
        {
          id: "olchem-u11-gas-tests-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe tests for oxygen, hydrogen and carbon dioxide.",
          parts: [
            { label: "a", prompt: "Test for oxygen.", marks: 2 },
            { label: "b", prompt: "Test for hydrogen.", marks: 2 },
            { label: "c", prompt: "Test for carbon dioxide.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Gas tests", statement: "O₂ splint relights, H₂ squeaky pop, CO₂ milky limewater." }],
            steps: [
              { part: "a", reasoning: "Glowing splint.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Relights.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Lighted splint.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Squeaky pop.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Limewater.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Bubble through.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Turns milky.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "CaCO₃ precipitate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) splint relights (b) squeaky pop (c) limewater milky",
            commonErrors: ["In (b) using glowing splint — that's O₂."],
          },
        },
      ],
    },
    {
      id: "olchem-u11-ion-tests",
      title: "Tests for ions",
      skill: "Describe flame tests and precipitation tests for cations and anions.",
      lesson: {
        sections: [
          {
            heading: "Flame tests (cations)",
            body: "| Ion | Flame colour |\n|---|---|\n| Li⁺ | crimson/red |\n| Na⁺ | yellow |\n| K⁺ | lilac |\n| Ca²⁺ | brick red |\n| Cu²⁺ | blue-green |",
          },
          {
            heading: "Precipitation tests (cations)",
            body: "Add NaOH:\n- Cu²⁺ → pale blue precipitate (dissolves in excess → deep blue [Cu(OH)₄]²⁻)\n- Fe²⁺ → green precipitate → brown on air\n- Fe³⁺ → orange/brown precipitate\n- Ca²⁺ → white precipitate (insoluble in excess)\n\nAdd AgNO₃ for Cl⁻/Br⁻/I⁻ → AgCl white, AgBr cream, AgI yellow.",
          },
          {
            heading: "Anion tests",
            body: "- **CO₃²⁻**: add acid → effervescence (CO₂).\n- **SO₄²⁻**: BaCl₂ → white precipitate (BaSO₄).\n- **Cl⁻/Br⁻/I⁻**: AgNO₃ → AgCl white, AgBr cream, AgI yellow.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A solution gives a yellow flame and white precipitate with AgNO₃. Identify ions.",
          solution: "Yellow flame → Na⁺. White precipitate → Cl⁻ (AgCl).",
        },
      },
      questions: [
        {
          id: "olchem-u11-ion-tests-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What flame colour does potassium give?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Yellow" }, { id: "b", text: "Lilac" }, { id: "c", text: "Crimson" }, { id: "d", text: "Brick red" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Flame tests", statement: "K⁺ = lilac." }],
            steps: [{ reasoning: "Recall.", working: "K^+ = \\text{lilac}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Lilac",
            commonErrors: ["Confusing with Na⁺ yellow."],
          },
        },
        {
          id: "olchem-u11-ion-tests-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What precipitate forms when NaOH is added to Cu²⁺ solution?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Cu²⁺ test", statement: "Pale blue precipitate." }],
            steps: [
              { reasoning: "Colour.", marks: 1, markCode: "M" },
              { reasoning: "State precipitate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A pale blue precipitate of copper(II) hydroxide.",
            commonErrors: ["Wrong colour — it's pale blue."],
          },
        },
        {
          id: "olchem-u11-ion-tests-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to test for carbonate ions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "CO₃²⁻ test", statement: "Add acid → CO₂ effervescence." }],
            steps: [
              { reasoning: "Add dilute acid.", marks: 1, markCode: "M" },
              { reasoning: "Effervescence = CO₂.", marks: 1, markCode: "M" },
              { reasoning: "Confirm with limewater.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add dilute acid — effervescence occurs; pass gas through limewater to confirm CO₂ (turns milky).",
            commonErrors: ["Not confirming gas identity with limewater."],
          },
        },
        {
          id: "olchem-u11-ion-tests-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe tests to identify Na⁺, Cu²⁺ and Cl⁻ ions in a solution.",
          parts: [
            { label: "a", prompt: "Test for Na⁺.", marks: 2 },
            { label: "b", prompt: "Test for Cu²⁺.", marks: 3 },
            { label: "c", prompt: "Test for Cl⁻.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Ion tests", statement: "Na⁺ yellow flame; Cu²⁺ blue ppt with NaOH; Cl⁻ white ppt with AgNO₃." }],
            steps: [
              { part: "a", reasoning: "Flame test.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Yellow flame.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add NaOH.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Pale blue precipitate.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete test.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add AgNO₃.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "White precipitate AgCl.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "In nitric acid to prevent interference.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete test.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) flame yellow (b) NaOH→blue ppt (c) AgNO₃→white ppt AgCl",
            commonErrors: ["In (c) forgetting acidify with HNO₃ first."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u11-tests-notes",
      title: "Chemical tests — revision notes",
      summary: "Gas tests (splints, limewater, litmus), flame tests, precipitation tests.",
      sections: [
        {
          heading: "Key facts",
          body: "O₂ relights splint, H₂ squeaky pop, CO₂ milky limewater, NH₃→blue litmus. Flames: Li crimson, Na yellow, K lilac, Ca brick red, Cu blue-green. NaOH: Cu²⁺ blue ppt, Fe²⁺ green→brown, Fe³⁺ orange. AgNO₃: Cl⁻ white, Br⁻ cream, I⁻ yellow.",
        },
        {
          heading: "Exam technique",
          body: "- Always state reagent + observation + conclusion.\n- AgNO₃ test needs acidify with HNO₃ first.",
        },
      ],
    },
  ],
};
