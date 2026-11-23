const fs = require('fs');
const path = 'scripts/data-us-g5-ela.cjs';
let s = fs.readFileSync(path, 'utf8');

function mk(slug, title, can, standards, vocab, skill, sections, formulas, worked, questions) {
  return '        lesson("' + slug + '", "' + title + '", "' + can + '", ' + JSON.stringify(standards) + ',\n' +
    '          ' + JSON.stringify(vocab) + ',\n' +
    '          {\n' +
    '            title: "' + title + '",\n' +
    '            skill: "' + skill + '",\n' +
    '            sections: ' + JSON.stringify(sections) + ',\n' +
    '            formulas: ' + JSON.stringify(formulas) + ',\n' +
    '            worked: ' + JSON.stringify(worked) + ',\n' +
    '            questions: Q8(\n' + questions + '\n            ),\n' +
    '          }),\n';
}

function qs(arr) {
  return arr.map(q => '              ' + q).join(',\n') + ',';
}

// Unit 3: media-literacy
const u3 = mk('media-literacy', 'Media Literacy', 'I CAN analyze how media messages are created and their purpose.', ['RL.5.7'],
  [['Media', 'Films, images, ads.'], ['Message', 'What it says.'], ['Purpose', 'Why it was made.'], ['Audience', 'Who it targets.'], ['Technique', 'How it persuades.'], ['Analyze', 'Study carefully.'], ['Bias', 'Slanted view.'], ['Reliable', 'Trustworthy.']],
  'Analyze media messages, their purpose and techniques used.',
  [['Media', 'Created to persuade or inform.'], ['Techniques', 'Images, music, words to influence.']],
  [['Media', 'Purpose + audience + techniques = analysis']],
  { problem: 'Analyze a commercial: what is its purpose and what techniques does it use?', solution: 'Purpose: sell product. Techniques: catchy music, celebrity, happy images, repetition.' },
  qs([
    'one.mcqF("The purpose of an advertisement is to...", [["a","inform only"],["b","persuade you to buy something"],["c","entertain"],["d","educate"]], "b", "Persuade to buy.", "persuade you to buy something", "Wrong purpose."),',
    'one.mcqC("Media techniques include...", [["a","only words"],["b","images, music, repetition, celebrity"],["c","only facts"],["d","only text"]], "b", "Images, music, repetition, celebrity.", "images, music, repetition, celebrity", "Too narrow."),',
    'op("core", "Analyze a media message (ad, poster, video). State its purpose, audience, and two techniques used.", [P("skill","Media","Purpose + audience + techniques.")], [S("States purpose + audience.",1,"M"), S("Identifies techniques.",1,"B")], "**Purpose: sell/inform; Audience: [who]; Techniques: [images, music, etc.].**", ["Cannot analyze.","Missing parts."]),',
    'one.mcqF("A bias in media means...", [["a","balance"],["b","a slanted or unfair view"],["c","accuracy"],["d","clarity"]], "b", "Slanted view.", "a slanted or unfair view", "Wrong meaning."),',
    'two.opH("How do media creators use techniques to influence their audience? Give an example.", [P("skill","Media","Techniques + example.")], [S("Explains techniques.",1,"M"), S("Gives example.",1,"B")], "**e.g., Ads use bright colors and happy music to make products seem appealing.**", ["Cannot explain.","No example."]),',
    'vocabQs([["Media","Films, images, ads."],["Message","What it says."],["Purpose","Why it was made."],["Audience","Who it targets."],["Technique","How it persuades."],["Analyze","Study carefully."],["Bias","Slanted view."],["Reliable","Trustworthy."]], 3),'
  ]));
s = s.replace('        lesson("integration-review"', u3 + '        lesson("integration-review"');

// Unit 5: research-writing
const u5 = mk('research-writing', 'Research and Note-Taking', 'I CAN gather information from sources and take notes.', ['W.5.7','W.5.8'],
  [['Research', 'Find information.'], ['Source', 'Where info comes from.'], ['Note', 'Key point written down.'], ['Reliable', 'Trustworthy.'], ['Cite', 'Credit source.'], ['Paraphrase', 'Restate in own words.'], ['Quote', 'Exact words.'], ['Organize', 'Arrange notes.']],
  'Gather information from reliable sources and organize notes.',
  [['Research', 'Find + evaluate sources.'], ['Notes', 'Key points + citations.']],
  [['Research', 'Sources + notes + citations = research skills']],
  { problem: 'Research a topic: find two reliable sources, take notes, and cite them.', solution: 'Sources: encyclopedia + science site. Notes: key facts with source names.' },
  qs([
    'one.mcqF("A reliable source is...", [["a","any website"],["b","a trustworthy, accurate source"],["c","the longest"],["d","the newest"]], "b", "Trustworthy/accurate.", "a trustworthy, accurate source", "Thinks any source works."),',
    'one.mcqC("When taking notes, you should...", [["a","copy everything"],["b","write key points and cite the source"],["c","only write quotes"],["d","write in full sentences only"]], "b", "Key points + citations.", "write key points and cite the source", "Copies everything."),',
    'op("core", "Research a topic: find one reliable source, write two notes with the source cited, and paraphrase one fact.", [P("skill","Research","Source + notes + paraphrase.")], [S("Finds source.",1,"M"), S("Takes notes + paraphrases.",1,"B")], "**Source: [name]; Notes: [fact 1, fact 2 with source]; Paraphrase: [own words].**", ["Cannot research.","Missing citations."]),',
    'one.mcqF("To cite a source means to...", [["a","ignore it"],["b","give credit to where information came from"],["c","copy it"],["d","hide it"]], "b", "Give credit.", "give credit to where information came from", "Wrong meaning."),',
    'two.opH("Explain the difference between quoting and paraphrasing. When would you use each?", [P("skill","Research","Difference + when to use.")], [S("Explains difference.",1,"M"), S("Says when to use each.",1,"B")], "**Quote: exact words (for important statements); Paraphrase: own words (for most info).**", ["Cannot explain.","No when-to-use."]),',
    'vocabQs([["Research","Find information."],["Source","Where info comes from."],["Note","Key point written down."],["Reliable","Trustworthy."],["Cite","Credit source."],["Paraphrase","Restate in own words."],["Quote","Exact words."],["Organize","Arrange notes."]], 3),'
  ]));
s = s.replace('        lesson("argument-review"', u5 + '        lesson("argument-review"');

// Unit 6: planning-revision
const u6 = mk('planning-revision', 'Planning and Revising', 'I CAN plan and revise my writing.', ['W.5.5','W.5.6'],
  [['Plan', 'Organize ideas.'], ['Draft', 'First version.'], ['Revise', 'Improve.'], ['Edit', 'Fix errors.'], ['Feedback', 'Suggestions.'], ['Peer', 'Classmate.'], ['Strength', 'Good part.'], ['Improve', 'Make better.']],
  'Plan, draft, revise and edit writing using feedback.',
  [['Process', 'Plan -> draft -> revise -> edit.'], ['Feedback', 'Helps improve.']],
  [['Writing', 'Plan + draft + revise + edit = process']],
  { problem: 'Write a draft, get feedback, and revise it. What did you improve?', solution: 'Added details, fixed punctuation, strengthened introduction.' },
  qs([
    'one.mcqF("The writing process includes...", [["a","only writing"],["b","planning, drafting, revising, editing"],["c","only editing"],["d","only planning"]], "b", "All four steps.", "planning, drafting, revising, editing", "Missing steps."),',
    'one.mcqC("Revising means...", [["a","fixing spelling"],["b","improving content and organization"],["c","writing first draft"],["d","planning"]], "b", "Improve content/organization.", "improving content and organization", "Confuses with editing."),',
    'op("core", "Write a draft paragraph, identify two things to improve, and revise it. Explain your changes.", [P("skill","Process","Draft + improvements + revision.")], [S("Writes draft.",1,"M"), S("Revises + explains.",1,"B")], "**Draft; Improvements: [details, organization]; Revision: [changes made].**", ["Cannot revise.","No explanation."]),',
    'one.mcqF("Editing focuses on...", [["a","ideas"],["b","spelling, punctuation, grammar"],["c","content"],["d","organization"]], "b", "Spelling, punctuation, grammar.", "spelling, punctuation, grammar", "Confuses with revising."),',
    'two.opH("Explain the difference between revising and editing. Give an example of each.", [P("skill","Process","Difference + examples.")], [S("Explains difference.",1,"M"), S("Gives examples.",1,"B")], "**Revise: improve content/ideas; Edit: fix mechanical errors.**", ["Cannot explain.","No examples."]),',
    'vocabQs([["Plan","Organize ideas."],["Draft","First version."],["Revise","Improve."],["Edit","Fix errors."],["Feedback","Suggestions."],["Peer","Classmate."],["Strength","Good part."],["Improve","Make better."]], 3),'
  ]));
s = s.replace('        lesson("writing-review"', u6 + '        lesson("writing-review"');

// Unit 7: vocabulary-strategy
const u7 = mk('vocabulary-strategy', 'Vocabulary Strategy', 'I CAN use word parts and context to learn new vocabulary.', ['L.5.4','L.5.5'],
  [['Root', 'Base of word.'], ['Prefix', 'Beginning.'], ['Suffix', 'Ending.'], ['Context', 'Surrounding words.'], ['Infer', 'Figure out.'], ['Compound', 'Two words joined.'], ['Etymology', 'Word origin.'], ['Nuance', 'Subtle difference.']],
  'Use roots, prefixes, suffixes and context to determine word meanings.',
  [['Word parts', 'Root + prefix + suffix = meaning.'], ['Context', 'Surrounding words give clues.']],
  [['Vocabulary', 'Word parts + context = strategies']],
  { problem: 'Break down "unhappiness": un- (not) + happy + -ness (state) = not happy.', solution: 'un- = not; happy = happy; -ness = state of being; unhappiness = state of not being happy.' },
  qs([
    'one.mcqF("A prefix is...", [["a","word ending"],["b","beginning of a word that changes meaning"],["c","root"],["d","suffix"]], "b", "Beginning of word.", "beginning of a word that changes meaning", "Confuses with suffix."),',
    'one.mcqC("In unhappy, un- means...", [["a","very"],["b","not"],["c","again"],["d","before"]], "b", "un- = not.", "not", "Wrong meaning."),',
    'op("core", "Break down a word into root + prefix/suffix and explain its meaning. Then use context to confirm.", [P("skill","Vocabulary","Breakdown + context.")], [S("Breaks down word.",1,"M"), S("Uses context.",1,"B")], "**e.g., replay: re- (again) + play = play again; context confirms.**", ["Cannot break down.","No context."]),',
    'one.mcqF("A suffix is...", [["a","word beginning"],["b","ending of a word that changes meaning"],["c","root"],["d","prefix"]], "b", "Ending of word.", "ending of a word that changes meaning", "Confuses with prefix."),',
    'two.opH("Explain how knowing word parts helps you understand unfamiliar words. Give an example.", [P("skill","Vocabulary","Benefit + example.")], [S("Explains benefit.",1,"M"), S("Gives example.",1,"B")], "**Word parts reveal meaning: transport = trans- (across) + port (carry) = carry across.**", ["Cannot explain.","No example."]),',
    'vocabQs([["Root","Base of word."],["Prefix","Beginning."],["Suffix","Ending."],["Context","Surrounding words."],["Infer","Figure out."],["Compound","Two words joined."],["Etymology","Word origin."],["Nuance","Subtle difference."]], 3),'
  ]));
s = s.replace('        lesson("language-review"', u7 + '        lesson("language-review"');

fs.writeFileSync(path, s);
console.log('done');
