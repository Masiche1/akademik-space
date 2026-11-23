// AP World Languages — condensed core for 7 courses. Spec for scripts/gen-us-elementary.cjs.
const P = (kind, name, statement) => [kind, name, statement];
const S = (reasoning, marks, markCode = "A", working) => ({ reasoning, marks, markCode, ...(working ? { working } : {}) });
const mcq = (difficulty, totalMarks, stem, choices, correct, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, choices, correct, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const num = (difficulty, totalMarks, stem, numeric, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, numeric, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const op = (difficulty, totalMarks, stem, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const lesson = (slug, title, goal, standards, vocab, concept) => ({ slug, title, goal, standards, vocab, concept });

const mk = (o) => o;
const Q = (stem, choices, correct, pr, steps, ans, err) => mcq("core", 2, stem, choices, correct, pr, steps, ans, err);
const QF = (stem, choices, correct, pr, steps, ans, err) => mcq("foundation", 1, stem, choices, correct, pr, steps, ans, err);
const QCH = (stem, pr, steps, ans, err) => op("challenge", 4, stem, pr, steps, ans, err);
const QC = (stem, pr, steps, ans, err) => op("core", 3, stem, pr, steps, ans, err);
const NQ = (stem, label, answer, pr, steps, ans, err) => num("core", 2, stem, [{ label, answer }], pr, steps, ans, err);

const courses = [];

// ---------- AP Spanish Language and Culture ----------
courses.push(mk({
  id: "ap-spanish-language-culture",
  exportName: "apSpanishLanguageCulture",
  prefix: "apsp",
  title: "AP Spanish Language and Culture",
  shortTitle: "AP Spanish",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Spanish language proficiency for college credit — interpersonal, interpretive, and presentational communication across cultural contexts.",
  ap: { exam: "spanish-language-culture" },
  units: [{
    id: "apsp-u1", title: "Language Proficiency Foundations", description: "Core Spanish grammar, vocabulary, and communication skills.",
    lessons: [
      lesson("spanish-grammar-foundations", "Spanish Grammar Foundations", "I CAN apply core Spanish grammar: ser/estar, por/para, subjunctive triggers.", ["Unit 1"],
        [["Ser vs. estar", "Ser = permanent traits/origin; estar = temporary states/location."], ["Por vs. para", "Por = cause/duration/exchange; para = purpose/destination/deadline."], ["Subjunctive", "Mood for doubt, desire, emotion — triggers: espero que, quiero que, es importante que."], ["Preterite vs. imperfect", "Preterite = completed actions; imperfect = ongoing/habitual past."], ["Reflexive verbs", "Actions on oneself — me llamo, te levantas, se sienta."], ["Accents", "Written stress marks — changes meaning: sí (yes) vs. si (if)."]],
        {
          title: "Core Spanish grammar",
          skill: "Apply essential Spanish grammar structures accurately.",
          sections: [
            ["Ser vs. estar", "Ser for permanent characteristics (soy estudiante, es médico); estar for temporary states and locations (estoy cansado, está en Madrid) — the eternal dilemma."],
            ["Subjunctive basics", "Used for doubt, desire, emotion, impersonal expressions — 'espero que vengas' (I hope you come); indicative for facts, subjunctive for uncertainty/wishes."],
          ],
          formulas: [
            ["Ser vs. estar", "Ser = permanent; Estar = temporary/location"],
            ["Por vs. para", "Por = cause/duration; Para = purpose/deadline"],
            ["Subjunctive triggers", "Espero que / Quiero que / Es importante que"],
          ],
          worked: { problem: "Choose ser/estar: 'Yo ___ cansado'", solution: "Estar — temporary state; 'Yo estoy cansado' (I am tired now); 'Yo soy estudiante' uses ser for permanent identity." },
          questions: [
            QF("Which verb means 'I am tired' (temporary state)?", [["a", "soy"], ["b", "estoy"], ["c", "tengo"], ["d", "hago"]], "b",
              [P("context", "Ser vs. estar", "Temporary states use estar.")],
              [S("'Estoy cansado' uses estar for temporary state; 'soy' would imply permanent trait — incorrect for tiredness.", 1, "B")], "estoy", ["Using ser for temporary state."]),
            Q("'Espero que ___ (venir)' requires subjunctive:", [["a", "vienes"], ["b", "vengas"], ["c", "vendrás"], ["d", "venías"]], "b",
              [P("definition", "Subjunctive triggers", "Espero que triggers subjunctive.")],
              [S("'Espero que' expresses hope/desire → subjunctive; 'vengas' is present subjunctive of venir; indicative 'vienes' incorrect after trigger.", 1, "M"), S("Subjunctive expresses uncertainty/wish vs. indicative facts.", 1, "B")], "vengas", ["Using indicative after subjunctive trigger."]),
            QC("Explain the difference between por and para with examples.",
              [P("context", "Por vs. para", "Cause vs. purpose."), P("skill", "Application", "Distinguish usage.")],
              [S("Por: cause/reason ('por la lluvia' — because of rain), duration ('por dos horas'), exchange ('por dinero'), through ('por el parque').", 1, "B"), S("Para: purpose ('para estudiar' — to study), destination ('para Madrid'), deadline ('para mañana'), intended recipient ('para ti').", 1, "M"), S("Key distinction: por looks backward (cause), para looks forward (purpose/destination).", 1, "B")], "Por=cause/duration; Para=purpose/destination", ["Mixing the two — different directional logic."]),
            QCH("Analyze why Spanish subjunctive is challenging for English speakers and how to master it.",
              [P("concept", "Subjunctive difficulty", "English lacks equivalent mood.")],
              [S("English doesn't have subjunctive mood — we use same verb forms for facts and wishes; Spanish requires different conjugation creating cognitive load.", 1, "B"), S("Mastery strategies: learn trigger phrases (espero que, quiero que, es importante que), practice with high-frequency subjunctive verbs (ser, estar, tener, ir), recognize patterns.", 1, "M"), S("Subjunctive expresses attitude (doubt, desire, emotion) not just time — deeper grammatical concept than English equivalent.", 1, "B"), S("Verdict: subjunctive requires mindset shift — thinking in terms of speaker's attitude toward action, not just action itself.", 1, "B")], "Subjunctive = attitude toward action; learn triggers + patterns", ["Memorizing without understanding — it's mood not just conjugation."]),
          ],
        }),
      ],
    },
  ],
}));

// ---------- AP French Language and Culture ----------
courses.push(mk({
  id: "ap-french-language-culture",
  exportName: "apFrenchLanguageCulture",
  prefix: "apfr",
  title: "AP French Language and Culture",
  shortTitle: "AP French",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "French language proficiency — communication skills and cultural contexts for college credit.",
  ap: { exam: "french-language-culture" },
  units: [{
    id: "apfr-u1", title: "French Proficiency Foundations", description: "Core French grammar, vocabulary, and communication.",
    lessons: [
      lesson("french-grammar-foundations", "French Grammar Foundations", "I CAN apply core French grammar: passé composé, subjunctive, pronouns.", ["Unit 1"],
        [["Passé composé", "Compound past — auxiliary (avoir/être) + past participle."], ["Être vs. avoir", "Most verbs use avoir; movement/change-of-state use être (DR MRS VANDERTRAMP)."], ["Subjunctive", "Mood for doubt, desire, emotion — il faut que, je veux que."], ["Pronouns", "Subject (je, tu), stressed (moi, toi), object (me, te, le), reflexive (se)."], ["Agreement", "Past participle agrees with avoir object if before; always with être subject."], ["Liaison", "Linking final consonant to next vowel — les_amis pronounced 'lay-zami'."]],
        {
          title: "Core French grammar",
          skill: "Apply essential French grammar accurately.",
          sections: [
            ["Passé composé", "Compound past using avoir or être + past participle — 'j'ai mangé' (I ate); être verbs show agreement with subject."],
            ["Subjunctive", "Used for doubt, desire, emotion — 'il faut que tu viennes' (you must come); indicative for facts, subjunctive for uncertainty/wishes."],
          ],
          formulas: [
            ["Passé composé", "Avoir/Être + past participle"],
            ["Être verbs", "Movement/change-of-state (DR MRS VANDERTRAMP)"],
            ["Subjunctive triggers", "Il faut que / Je veux que / Bien que"],
          ],
          worked: { problem: "Conjugate 'aller' in passé composé", solution: "Être verb (movement) → 'je suis allé(e)' — agrees with subject; most verbs use avoir ('j'ai parlé')." },
          questions: [
            QF("'Je ___ (manger)' in passé composé:", [["a", "suis mangé"], ["b", "ai mangé"], ["c", "mangeais"], ["d", "mangerai"]], "b",
              [P("context", "Passé composé", "Most verbs use avoir.")],
              [S("Manger uses avoir → 'j'ai mangé'; être verbs are movement/change-of-state exceptions.", 1, "B")], "ai mangé", ["Using être for non-motion verb."]),
            Q("'Il faut que tu ___ (venir)' requires subjunctive:", [["a", "viens"], ["b", "viennes"], ["c", "viendras"], ["d", "venais"]], "b",
              [P("definition", "Subjunctive triggers", "Il faut que triggers subjunctive.")],
              [S("'Il faut que' expresses necessity → subjunctive; 'viennes' is present subjunctive of venir.", 1, "M"), S("Subjunctive expresses obligation/uncertainty.", 1, "B")], "viennes", ["Using indicative after trigger."]),
            QC("Explain the difference between tu and vous forms.",
              [P("context", "Tu vs. vous", "Informal vs. formal/plural."), P("skill", "Application", "Register choice.")],
              [S("Tu: singular informal — friends, family, children, peers; vous: plural OR formal singular — strangers, elders, professional contexts.", 1, "B"), S("Choosing wrong register is socially significant — using tu with stranger is rude; using vous with friend is distant; French social hierarchy matters.", 1, "M"), S("Verb conjugations differ — tu parles, vous parlez; pronouns differ — ton/ta vs. votre/vos.", 1, "B")], "Tu=informal singular; Vous=formal/plural", ["Ignoring register — it's socially important."]),
            QCH("Analyze why French liaison and elision complicate pronunciation for learners.",
              [P("concept", "French phonology", "Connected speech rules.")],
              [S("Liaison: final consonant links to next vowel — 'les_amis' = 'lay-zami'; elision: vowel drops before vowel — 'le ami' → 'l'ami'; creates connected speech different from spelling.", 1, "B"), S("These rules are obligatory in formal speech but variable in casual — learners must know when required vs. optional; regional variation adds complexity.", 1, "M"), S("Mastery requires listening practice — spelling doesn't predict pronunciation; immersion helps internalize patterns.", 1, "B"), S("Verdict: liaison/elision reflect French's connected-speech nature — mastering them requires exposure, not just rules.", 1, "B")], "Liaison/elision = connected speech; learn through listening", ["Reading rules without listening practice."]),
          ],
        }),
      ],
    },
  ],
}));

// ---------- AP German Language and Culture ----------
courses.push(mk({
  id: "ap-german-language-culture",
  exportName: "apGermanLanguageCulture",
  prefix: "apde",
  title: "AP German Language and Culture",
  shortTitle: "AP German",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "German language proficiency — communication skills and cultural contexts.",
  ap: { exam: "german-language-culture" },
  units: [{
    id: "apde-u1", title: "German Proficiency Foundations", description: "Core German grammar, vocabulary, and communication.",
    lessons: [
      lesson("german-grammar-foundations", "German Grammar Foundations", "I CAN apply core German grammar: cases, word order, verb placement.", ["Unit 1"],
        [["Cases", "Nominative (subject), accusative (direct object), dative (indirect), genitive (possession)."], ["Word order", "V2 rule — verb second in main clauses; verb-final in subordinate clauses."], ["Separable verbs", "Prefix separates in main clause — 'ich stehe auf' (I get up)."], ["Articles", "Der/die/das — gender + case + number combinations."], ["Modal verbs", "Können, müssen, wollen, dürfen, sollen, mögen — conjugated + infinitive at end."], ["Präteritum vs. Perfekt", "Präteritum for written/formal; Perfekt for spoken/daily."]],
        {
          title: "Core German grammar",
          skill: "Apply essential German grammar accurately.",
          sections: [
            ["Cases", "Nominative (subject), accusative (direct object), dative (indirect object/preposition), genitive (possession) — articles change form; English lacks cases."],
            ["Word order", "V2: verb always second in main clause — 'Ich esse heute Pizza' (I eat today pizza); subordinate clauses put verb last."],
          ],
          formulas: [
            ["Cases", "Nom/Acc/Dat/Gen — articles change by gender+case+number"],
            ["V2 rule", "Verb second in main clauses"],
            ["Separable verbs", "Prefix separates: aufstehen → ich stehe auf"],
          ],
          worked: { problem: "Conjugate 'aufstehen' (get up)", solution: "Separable: 'ich stehe auf' — prefix 'auf' goes to end in main clause; 'ich aufstehe' wrong." },
          questions: [
            QF("The accusative case marks ___.", [["a", "subject"], ["b", "direct object"], ["c", "indirect object"], ["d", "possession"]], "b",
              [P("definition", "Accusative case", "Direct object marker.")],
              [S("Accusative marks direct object — 'Ich sehe den Mann' (I see the man); den is masculine accusative article.", 1, "B")], "Direct object", ["Confusing with nominative/dative."]),
            Q("'Ich ___ heute Pizza' (V2 word order):", [["a", "esse heute"], ["b", "heute esse"], ["c", "esse Pizza heute"], ["d", "heute Pizza esse"]], "a",
              [P("context", "V2 rule", "Verb must be second.")],
              [S("V2: 'Ich esse heute Pizza' — verb 'esse' second; 'heute' can move but verb stays second.", 1, "M"), S("Subordinate clauses differ — verb goes last.", 1, "B")], "esse heute", ["Putting verb first or last."]),
            QC("Explain German cases and why they challenge English speakers.",
              [P("context", "German cases", "Four-way noun marking."), P("skill", "Analysis", "Cross-linguistic difficulty.")],
              [S("English marks roles by word order ('I see him' vs 'He sees me'); German marks by case endings — 'Ich sehe ihn' (accusative) vs 'Er sieht mich' (accusative) — same case, different position.", 1, "B"), S("Four cases × three genders × two numbers = 24 article forms; must memorize der/die/das × nom/acc/dat/gen — daunting but systematic.", 1, "M"), S("Cases allow flexible word order for emphasis — 'Den Mann sehe ich' puts object first for focus; English can't do this without awkwardness.", 1, "B")], "Cases mark roles via endings; flexible word order", ["Thinking word order is fixed — cases enable flexibility."]),
            QCH("Analyze how German's case system reflects its grammatical philosophy.",
              [P("concept", "Case system", "Explicit role marking.")],
              [S("German cases make grammatical roles explicit — noun endings show function regardless of position; precision over flexibility; reflects Germanic linguistic tradition.", 1, "B"), S("Benefits: flexible word order for emphasis; unambiguous parsing of complex sentences; systematic once learned — cases are logical not arbitrary.", 1, "M"), S("Challenges: 24 article combinations to memorize; English speakers must rethink sentence structure — moving from positional to morphological thinking.", 1, "B"), S("Verdict: case system reflects German's precision-oriented grammar — explicit marking enables both clarity and flexibility; challenging but rewarding.", 1, "B")], "Cases = explicit marking enabling flexibility + precision", ["Seeing as arbitrary complexity — it's systematic logic."]),
          ],
        }),
      ],
    },
  ],
}));

// ---------- AP Italian Language and Culture ----------
courses.push(mk({
  id: "ap-italian-language-culture",
  exportName: "apItalianLanguageCulture",
  prefix: "apit",
  title: "AP Italian Language and Culture",
  shortTitle: "AP Italian",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Italian language proficiency — communication skills and cultural contexts.",
  ap: { exam: "italian-language-culture" },
  units: [{
    id: "apit-u1", title: "Italian Proficiency Foundations", description: "Core Italian grammar, vocabulary, and communication.",
    lessons: [
      lesson("italian-grammar-foundations", "Italian Grammar Foundations", "I CAN apply core Italian grammar: articles, prepositions, subjunctive.", ["Unit 1"],
        [["Articles", "Il/lo/la/l'/i/gli/le — gender (masculine/feminine) + number + phonetic environment."], ["Prepositions", "Di (of), a (to), da (from/by), in (in), con (with), su (on), per (for), tra/fra (between)."], ["Subjunctive", "Mood for doubt, desire, emotion — penso che, spero che."], ["Passato prossimo", "Present perfect — avere/essere + past participle."], ["Reflexive verbs", "si/mi/ti — actions on oneself: mi chiamo, ti svegli."], ["Double consonants", "Distinguish meaning — 'papa' (pope) vs. 'pappa' (baby food)."]],
        {
          title: "Core Italian grammar",
          skill: "Apply essential Italian grammar accurately.",
          sections: [
            ["Articles", "Il (masc sing), lo (masc sing before s+consonant/z), la (fem sing), l' (before vowel); plurals i/gli/le — phonetic environment matters."],
            ["Subjunctive", "Used after expressions of doubt/desire/emotion — 'penso che sia' (I think it is — subjunctive); indicative for facts."],
          ],
          formulas: [
            ["Articles", "Il/lo/la/l' (sing) → i/gli/le (plural)"],
            ["Prepositions", "Di/a/da/in/con/su/per/tra-fra"],
            ["Subjunctive triggers", "Penso che / Spero che / È importante che"],
          ],
          worked: { problem: "Choose article: '___ zio' (uncle)", solution: "Lo zio — z requires lo; 'lo' before s+consonant, z, gn, ps; 'il' before most consonants." },
          questions: [
            QF("'___ amica' (the friend, feminine) requires:", [["a", "il"], ["b", "la"], ["c", "lo"], ["d", "l'"]], "b",
              [P("definition", "Italian articles", "Gender determines article.")],
              [S("Amica is feminine → 'la amica' → 'l'amica' before vowel; feminine singular uses la/l'.", 1, "B")], "la/l'", ["Using masculine article."]),
            Q("'Penso che lui ___ (essere) stanco' uses subjunctive:", [["a", "è"], ["b", "sia"], ["c", "sarà"], ["d", "era"]], "b",
              [P("definition", "Subjunctive triggers", "Penso che triggers subjunctive.")],
              [S("'Penso che' expresses opinion → subjunctive; 'sia' is present subjunctive of essere.", 1, "M"), S("Subjunctive expresses uncertainty/opinion vs. indicative facts.", 1, "B")], "sia", ["Using indicative after trigger."]),
            QC("Explain why Italian has so many article forms.",
              [P("context", "Italian articles", "Gender+number+phonetics."), P("skill", "Analysis", "Article complexity.")],
              [S("Italian articles mark gender (masculine/feminine), number (singular/plural), AND phonetic environment — 'il' vs 'lo' depends on following sound.", 1, "B"), S("This reflects Italian's phonetic precision — articles help pronunciation flow; 'lo' before s+consonant prevents awkward clusters.", 1, "M"), S("Complexity is systematic — learn patterns (il before most consonants, lo before s+cons/z/gn, la for feminine) rather than memorizing individually.", 1, "B")], "Gender+number+phonetics = many forms but systematic", ["Memorizing randomly — learn the patterns."]),
            QCH("Analyze how Italian's phonetic spelling differs from English and French. What are advantages/limitations?",
              [P("concept", "Italian phonetics", "Sound-spelling relationship.")],
              [S("Italian is largely phonetic — 'casa' pronounced as spelled, double consonants pronounced distinctly; much more predictable than English ('though' vs 'through' vs 'tough').", 1, "B"), S("Advantages: easy pronunciation once rules learned; spelling helps reading; double consonants clear. Limitations: English loanwords confuse; regional accents vary despite standard spelling.", 1, "M"), S("Italian dialects historically diverse — standard Italian based on Tuscan; regional pronunciation differs but spelling remains standard.", 1, "B"), S("Verdict: Italian's phonetic spelling aids learners — predictable sound-spelling relationship; trade-off is less 'hidden' complexity than English/French.", 1, "B")], "Italian phonetic spelling = predictable but limited depth", ["Assuming all spelling is equal — Italian is unusually phonetic."]),
          ],
        }),
      ],
    },
  ],
}));

// ---------- AP Japanese Language and Culture ----------
courses.push(mk({
  id: "ap-japanese-language-culture",
  exportName: "apJapaneseLanguageCulture",
  prefix: "apjp",
  title: "AP Japanese Language and Culture",
  shortTitle: "AP Japanese",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Japanese language proficiency — communication skills and cultural contexts.",
  ap: { exam: "japanese-language-culture" },
  units: [{
    id: "apjp-u1", title: "Japanese Proficiency Foundations", description: "Core Japanese grammar, writing systems, and communication.",
    lessons: [
      lesson("japanese-grammar-foundations", "Japanese Grammar Foundations", "I CAN apply core Japanese grammar: particles, verb forms, politeness levels.", ["Unit 1"],
        [["Particles", "は (topic), が (subject), を (object), に (to/at), で (in/at), へ (toward)."], ["Politeness levels", "Casual (taberu), polite (tabemasu), honorific (o-tabeni-naru) — social register."], ["Verb conjugation", "Ru-verbs (taberu), U-verbs (tabe-masu forms) — different conjugation patterns."], ["Kanji/Kana", "Three writing systems — Kanji (Chinese characters), Hiragana (native syllabary), Katakana (loanwords)."], ["Subject omission", "Japanese often omits subject — context determines who."], ["Counters", "Specific counting words — 一人 (hitori), 二冊 (nibo) — different per object type."]],
        {
          title: "Core Japanese grammar",
          skill: "Apply essential Japanese grammar and writing systems.",
          sections: [
            ["Particles", "Mark grammatical roles — は topic, が subject, を object, に/で location/time; Japanese is agglutinative — particles attach to words."],
            ["Politeness levels", "Casual (dictionary form), polite (masu-form), honorific (o-...-naru), humble (o-...-suru) — social hierarchy encoded in verb forms."],
          ],
          formulas: [
            ["Particles", "は=topic, が=subject, を=object, に/で=location"],
            ["Writing systems", "Kanji (meaning) + Hiragana (grammar/native) + Katakana (loanwords)"],
            ["Politeness", "Casual → Polite → Honorific/Humble"],
          ],
          worked: { problem: "Write 'I eat rice' in Japanese", solution: "私 (watashi) は (wa) ご飯 (gohan) を (o) 食べます (tabemasu) — particles mark roles; subject can be omitted." },
          questions: [
            QF("The particle を marks ___.", [["a", "subject"], ["b", "object"], ["c", "topic"], ["d", "location"]], "b",
              [P("definition", "を particle", "Object marker.")],
              [S("を marks direct object — 'ご飯を食べます' (eat rice); object receives action.", 1, "B")], "Object", ["Confusing with は or が."]),
            Q("'食べます' is the ___. form of 食べる:", [["a", "casual"], ["b", "polite"], ["c", "honorific"], ["d", "past"]], "b",
              [P("definition", "Polite form", "Masu-form = polite.")],
              [S("食べます is polite (masu) form of 食べる; casual would be 食べる (taberu).", 1, "M"), S("Politeness levels reflect social context.", 1, "B")], "Polite (masu)", ["Confusing with casual form."]),
            QC("Explain why Japanese uses three writing systems. What does each do?",
              [P("context", "Writing systems", "Kanji/Kana division."), P("skill", "Analysis", "Script functions.")],
              [S("Kanji: Chinese characters for meaning — nouns, verbs, adjectives; efficient (one character = word/idea); thousands to learn.", 1, "B"), S("Hiragana: native Japanese syllabary — grammar particles, native words, verb endings; learned first; ~46 basic characters.", 1, "M"), S("Katakana: loanword syllabary — foreign words (コンピューター), emphasis; visually distinct from Hiragana.", 1, "B")], "Kanji=meaning, Hiragana=grammar/native, Katakana=loanwords", ["Thinking it's redundant — each has distinct function."]),
            QCH("Analyze how Japanese encodes social hierarchy in language. What does this reveal about culture?",
              [P("concept", "Politeness levels", "Social hierarchy in grammar.")],
              [S("Japanese has multiple politeness levels — casual, polite (desu/masu), honorific (o-...-naru for superiors), humble (o-...-suru for self-lowering); verb forms change based on social relationship.", 1, "B"), S("This reveals: hierarchy matters, respect is linguistically encoded, context determines appropriate form — language reflects cultural values of social order.", 1, "M"), S("Learners must read social cues — choosing wrong politeness level is socially significant; language competence includes cultural competence.", 1, "B"), S("Verdict: Japanese grammar encodes social hierarchy — politeness isn't optional decoration but fundamental to communication; language mirrors cultural structure.", 1, "B")], "Politeness levels encode social hierarchy — language reflects culture", ["Treating as mere grammar — it's cultural encoding."]),
          ],
        }),
      ],
    },
  ],
}));

// ---------- AP Latin Language and Culture ----------
courses.push(mk({
  id: "ap-latin-language-culture",
  exportName: "apLatinLanguageCulture",
  prefix: "apla",
  title: "AP Latin Language and Culture",
  shortTitle: "AP Latin",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Latin language proficiency — reading, translation, and cultural literacy for college credit.",
  ap: { exam: "latin-language-culture" },
  units: [{
    id: "apla-u1", title: "Latin Proficiency Foundations", description: "Core Latin grammar, vocabulary, and translation.",
    lessons: [
      lesson("latin-grammar-foundations", "Latin Grammar Foundations", "I CAN apply core Latin grammar: cases, declensions, verb conjugation.", ["Unit 1"],
        [["Cases", "Nominative, genitive, dative, accusative, ablative, vocative — six cases marking function."], ["Declensions", "Five patterns for noun endings — first (a-stem), second (o-stem), third (consonant), etc."], ["Verb conjugation", "Present, imperfect, future, perfect, pluperfect, future perfect — six tenses."], ["Subjunctive", "Mood for doubt, desire, purpose — independent and dependent uses."], ["Agreement", "Adjectives agree with nouns in case, number, gender."], ["Word order", "Flexible — emphasis determines position; verb often final in formal Latin."]],
        {
          title: "Core Latin grammar",
          skill: "Apply essential Latin grammar and translation skills.",
          sections: [
            ["Cases", "Six cases mark function: nominative (subject), genitive (possession), dative (indirect object), accusative (direct object), ablative (various prepositional), vocative (address) — endings show role."],
            ["Declensions", "Five patterns for noun endings based on stem type — first declension (-a), second (-us/-um), third (consonant), etc.; each has unique endings per case."],
          ],
          formulas: [
            ["Cases", "Nom/Gen/Dat/Acc/Abl/Voc — function markers"],
            ["Declensions", "First/Second/Third/Fourth/Fifth — ending patterns"],
            ["Tenses", "Present/Imperfect/Future/Perfect/Pluperfect/Future perfect"],
          ],
          worked: { problem: "Translate 'puella amat' (girl loves)", solution: "Puella (girl, nominative) amat (loves, 3rd singular present) — 'the girl loves'; word order flexible but nominative marks subject." },
          questions: [
            QF("The nominative case marks ___.", [["a", "direct object"], ["b", "subject"], ["c", "possession"], ["d", "location"]], "b",
              [P("definition", "Nominative case", "Subject marker.")],
              [S("Nominative marks subject — 'puella amat' (girl loves); subject performs action.", 1, "B")], "Subject", ["Confusing with accusative."]),
            Q("'Puellae' is genitive singular of 'puella' meaning:", [["a", "of the girl"], ["b", "to the girl"], ["c", "the girl (subject)"], ["d", "by the girl"]], "a",
              [P("definition", "Genitive case", "Possession.")],
              [S("Genitive marks possession — 'puellae' = 'of the girl'; 'domus puellae' = 'the girl's house.'", 1, "M"), S("Genitive = of/from relationship.", 1, "B")], "of the girl", ["Confusing case functions."]),
            QC("Explain why Latin word order is flexible and what determines it.",
              [P("context", "Latin word order", "Emphasis-driven."), P("skill", "Analysis", "Syntax flexibility.")],
              [S("Latin word order flexible because cases mark grammatical roles — 'puella amat' and 'amat puella' both mean 'girl loves' since nominative marks subject regardless of position.", 1, "B"), S("Word order determined by emphasis — placing word first emphasizes it; verb-final common in formal style; poetic license for meter.", 1, "M"), S("This differs from English (fixed SVO) — Latin readers must identify roles via endings not position; challenging but systematic.", 1, "B")], "Cases enable flexible order; emphasis determines position", ["Assuming English word order applies — Latin is different."]),
            QCH("Analyze how Latin's case system shaped European languages. What legacy remains?",
              [P("concept", "Latin influence", "Romance language foundation.")],
              [S("Latin cases influenced Romance languages: Italian/Spanish/French/Portuguese/Romanian evolved from Latin; though cases simplified, traces remain (pronouns, prepositions, verb forms).", 1, "B"), S("Latin vocabulary dominates English — 60%+ English words Latin-derived; scientific/medical/legal terminology Latin-based; 'etc.' 'i.e.' 'e.g.' all Latin abbreviations.", 1, "M"), S("Studying Latin improves English vocabulary, grammar understanding, analytical thinking — 'mental gymnastics' for language; AP Latin provides cultural literacy for Western civilization.", 1, "B"), S("Verdict: Latin shaped European linguistic landscape — direct ancestor of Romance languages, major vocabulary source for English; studying it connects to Western cultural heritage.", 1, "B")], "Latin = ancestor of Romance languages + English vocabulary source", ["Seeing as 'dead language' — it's foundational."]),
          ],
        }),
      ],
    },
  ],
}));

module.exports = { courses };
