// AP Chinese Language and Culture — condensed core. Spec for scripts/gen-us-elementary.cjs.
const P = (kind, name, statement) => [kind, name, statement];
const S = (reasoning, marks, markCode = "A", working) => ({ reasoning, marks, markCode, ...(working ? { working } : {}) });
const mcq = (difficulty, totalMarks, stem, choices, correct, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, choices, correct, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const op = (difficulty, totalMarks, stem, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const lesson = (slug, title, goal, standards, vocab, concept) => ({ slug, title, goal, standards, vocab, concept });
const Q = (stem, choices, correct, pr, steps, ans, err) => mcq("core", 2, stem, choices, correct, pr, steps, ans, err);
const QF = (stem, choices, correct, pr, steps, ans, err) => mcq("foundation", 1, stem, choices, correct, pr, steps, ans, err);
const QC = (stem, pr, steps, ans, err) => op("core", 3, stem, pr, steps, ans, err);
const QCH = (stem, pr, steps, ans, err) => op("challenge", 4, stem, pr, steps, ans, err);

const apChinese = {
  id: "ap-chinese-language-culture",
  exportName: "apChineseLanguageCulture",
  prefix: "apzh",
  title: "AP Chinese Language and Culture",
  shortTitle: "AP Chinese",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Chinese language proficiency — communication skills and cultural contexts for college credit.",
  ap: { exam: "chinese-language-culture" },
  units: [{
    id: "apzh-u1", title: "Chinese Proficiency Foundations", description: "Core Chinese grammar, vocabulary, and communication.",
    lessons: [
      lesson("chinese-grammar-foundations", "Chinese Grammar Foundations", "I CAN apply core Chinese grammar: tones, measure words, aspect markers.", ["Unit 1"],
        [["Tones", "Four tones + neutral — mā (mother), má (hemp), mǎ (horse), mà (scold)."], ["Measure words", "Classifiers for counting — 一个人 (one person), 一本书 (one book)."], ["Aspect markers", "了 (completed), 过 (experienced), 着 (ongoing state)."], ["No conjugation", "Verbs don't conjugate — time shown by context/particles."], ["Topic-comment", "Chinese often front-loads topic — '这个问题，我知道' (this problem, I know)."], ["Pinyin", "Romanization system — tone marks indicate pronunciation."]],
        {
          title: "Core Chinese grammar",
          skill: "Apply essential Chinese grammar and pronunciation.",
          sections: [
            ["Tones", "Four tones + neutral: mā (high level), má (rising), mǎ (dipping-rising), mà (falling) — same syllable, different meaning; tone is meaning not decoration."],
            ["Measure words", "Required between number and noun — 一个人 (one person), 一本书 (one book), 一只猫 (one cat); different classifiers for different noun types."],
          ],
          formulas: [
            ["Tones", "1=high, 2=rising, 3=dipping, 4=falling, neutral=light"],
            ["Measure words", "个/本/只/张 — classifiers per noun type"],
            ["Aspect markers", "了=completed, 过=experienced, 着=ongoing"],
          ],
          worked: { problem: "Count 'three books' in Chinese", solution: "三本书 (sān běn shū) — 三 (three) + 本 (measure word for books) + 书 (book); measure word required." },
          questions: [
            QF("Mandarin Chinese has how many tones?", [["a", "2"], ["b", "4 (+ neutral)"], ["c", "6"], ["d", "8"]], "b",
              [P("definition", "Tones", "4 tones + neutral.")],
              [S("Mandarin has 4 tones + neutral tone — mā/má/mǎ/mà demonstrate how tone changes meaning entirely.", 1, "B")], "4 + neutral", ["Confusing with other Chinese varieties."]),
            Q("'我吃了饭' — the particle 了 indicates:", [["a", "future"], ["b", "completed action"], ["c", "habitual"], ["d", "question"]], "b",
              [P("definition", "Aspect marker 了", "Completed action.")],
              [S("了 marks completed aspect — '我吃了饭' = 'I ate (the meal is done)'; aspect not tense — time from context.", 1, "M"), S("Chinese marks aspect (how action relates to time) not tense (when).", 1, "B")], "Completed action", ["Confusing aspect with tense."]),
            QC("Explain why measure words are necessary in Chinese when English doesn't use them.",
              [P("context", "Measure words", "Classifiers required."), P("skill", "Analysis", "Cross-linguistic grammar.")],
              [S("Chinese requires measure words (classifiers) between number and noun — '三本书' not '三书'; English doesn't ('three books' directly).", 1, "B"), S("Measure words classify nouns by shape/type — 本 for books, 只 for animals, 张 for flat objects; reflects how Chinese categorizes objects.", 1, "M"), S("This forces speakers to think about noun categories — measure word choice reveals classification system embedded in language.", 1, "B")], "Classifiers categorize nouns — grammar reflects cognitive categorization", ["Thinking it's arbitrary — it reflects noun categories."]),
            QCH("Analyze how Chinese tones affect meaning and why they're challenging for learners.",
              [P("concept", "Tones as meaning", "Phonemic tones.")],
              [S("Tones are phonemic — change tone, change meaning: mā (mother) vs. má (hemp) vs. mǎ (horse) vs. mà (scold); same syllable different word entirely.", 1, "B"), S("Challenge: English uses intonation for emotion/questions, not meaning; learners must retrain ear to hear pitch as semantic not emotional — 'mother' said in wrong tone = different word.", 1, "M"), S("Tone sandhi complicates further — tones change in combination (two third tones → first + third); must learn contextual tone changes.", 1, "B"), S("Verdict: tones are fundamental to Chinese — they encode meaning not just sound; mastering them is essential for comprehension, not optional pronunciation detail.", 1, "B")], "Tones encode meaning — retrain ear from intonation to phoneme", ["Treating tones as optional — they're semantic."]),
          ],
        }),
      ],
    },
  ],
};

module.exports = { courses: [apChinese] };
