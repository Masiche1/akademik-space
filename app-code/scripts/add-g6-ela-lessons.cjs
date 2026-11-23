const fs = require('fs');
let content = fs.readFileSync('scripts/data-us-g6-ela.cjs', 'utf8');

// Unit 2 lesson
const u2Marker = 'lesson("character-viewpoint-review"';
const u2Lesson = `lesson("character-change", "Character Change", "I CAN analyze how characters change over time.", ["RL.6.3"],
          [["Change", "Becomes different."], ["Growth", "Develops."], ["Arc", "Journey."], ["Static", "Stays same."], ["Dynamic", "Changes."], ["Motivation", "Why."], ["Events", "What happens."], ["Evidence", "Proof."]],
          {
            title: "Character change",
            skill: "Analyze how characters change or stay the same throughout a story.",
            sections: [
              ["Dynamic vs static", "**Dynamic** characters change and grow; **static** characters stay the same. Most stories feature dynamic characters who learn lessons."],
              ["Tracking change", "Look for **before and after**: how does the character act differently at the end vs beginning? What events caused the change?"],
            ],
            formulas: [["Character change", "Dynamic characters grow through events; static stay same."]],
            worked: { problem: "A character starts selfish and ends generous. Is this dynamic or static?", solution: "**Dynamic — character changed through story events.**" },
            questions: Q8(
              one.mcqF("A 'dynamic character' is one who...", [["a","stays the same"],["b","changes and grows"],["c","is static"],["d","is minor"]], "b", "Changes and grows.", "changes and grows", "Confuses with static."),
              one.mcqC("To track character change, you should look for...", [["a","only the beginning"],["b","before and after differences"],["c","only the ending"],["d","only dialogue"]], "b", "Before and after.", "before and after differences", "Too narrow."),
              op("core", "Describe how a character might change in a story and what events would cause that change.",
                [P("skill", "Character change", "Change described.")],
                [S("Describes change.", 1, "M")], "**e.g., 'Starts fearful, faces challenge, learns courage, becomes confident.'**", ["No change described.", "Missing events."]),
              one.mcqF("A 'static character' is one who...", [["a","changes a lot"],["b","stays the same"],["c","is dynamic"],["d","is minor"]], "b", "Stays the same.", "stays the same", "Confuses with dynamic."),
              two.opH("Compare a dynamic and static character in a story and explain the difference.",
                [P("skill", "Character change", "Comparison.")],
                [S("Compares characters.", 1, "M"), S("Explains difference.", 1, "B")], "**e.g., 'Dynamic: learns lesson and changes; Static: remains same throughout.'**", ["Cannot compare.", "No difference explained."]),
              vocabQs([["Change", "Becomes different."], ["Growth", "Develops."], ["Arc", "Journey."], ["Static", "Stays same."], ["Dynamic", "Changes."], ["Motivation", "Why."], ["Events", "What happens."], ["Evidence", "Proof."]], 3),
            ),
          }),
        `;
content = content.replace(u2Marker, u2Lesson + u2Marker);

// Unit 3 lesson
const u3Marker = 'lesson("setting-plot-review"';
const u3Lesson = `lesson("symbolism-setting", "Symbolism in Setting", "I CAN analyze how setting symbolizes themes.", ["RL.6.3"],
          [["Symbolism", "Meaning beyond literal."], ["Setting", "Where/when."], ["Theme", "Lesson."], ["Metaphor", "Comparison."], ["Foreshadow", "Hints at future."], ["Atmosphere", "Mood."], ["Context", "Background."], ["Interpret", "Understand meaning."]],
          {
            title: "Symbolism in setting",
            skill: "Analyze how setting elements symbolize deeper meanings and themes.",
            sections: [
              ["Beyond literal", "**Symbolism** means something represents something else. Setting can symbolize themes — a storm might represent turmoil."],
              ["Finding symbols", "Ask: Does this setting detail mean more than literal? How does it connect to the theme?"],
            ],
            formulas: [["Symbolism", "Setting detail represents deeper meaning/theme."]],
            worked: { problem: "A story set in a dark, decaying house. What might this symbolize?", solution: "**Could symbolize decay, secrets, or hidden dangers — depends on theme.**" },
            questions: Q8(
              one.mcqF("'Symbolism' means...", [["a","literal meaning"],["b","meaning beyond literal"],["c","only setting"],["d","only theme"]], "b", "Beyond literal.", "meaning beyond literal", "Confuses with literal."),
              one.mcqC("Setting can symbolize themes by...", [["a","only describing place"],["b","representing deeper meanings"],["c","only naming location"],["d","only telling time"]], "b", "Deeper meanings.", "representing deeper meanings", "Too literal."),
              op("core", "Describe a setting element and explain how it might symbolize a theme.",
                [P("skill", "Symbolism", "Setting + symbol.")],
                [S("Describes setting.", 1, "M"), S("Explains symbol.", 1, "B")], "**e.g., 'Setting: abandoned house; Symbolizes: neglected family relationships or hidden secrets.'**", ["No symbolism.", "Literal only."]),
              one.mcqF("'Foreshadowing' is...", [["a","the ending"],["b","hints at future events"],["c","the setting"],["d","the theme"]], "b", "Hints at future.", "hints at future events", "Confuses with other elements."),
              two.opH("Identify a symbolic setting element and explain how it connects to the story's theme.",
                [P("skill", "Symbolism", "Symbol + theme.")],
                [S("Identifies symbol.", 1, "M"), S("Connects to theme.", 1, "B")], "**e.g., 'Symbol: storm approaching; Theme: impending danger/conflict; Connection: storm mirrors character's turmoil.'**", ["Cannot identify.", "No theme connection."]),
              vocabQs([["Symbolism", "Meaning beyond literal."], ["Setting", "Where/when."], ["Theme", "Lesson."], ["Metaphor", "Comparison."], ["Foreshadow", "Hints at future."], ["Atmosphere", "Mood."], ["Context", "Background."], ["Interpret", "Understand meaning."]], 3),
            ),
          }),
        `;
content = content.replace(u3Marker, u3Lesson + u3Marker);

// Unit 5 lesson
const u5Marker = 'lesson("argument-review"';
const u5Lesson = `lesson("audience-purpose", "Audience and Purpose", "I CAN tailor my argument to my audience and purpose.", ["W.6.1"],
          [["Audience", "Who it's for."], ["Purpose", "Why writing."], ["Tone", "Attitude."], ["Formal", "Official."], ["Informal", "Casual."], ["Adapt", "Change for audience."], ["Consider", "Think about."], ["Effective", "Works well."]],
          {
            title: "Audience and purpose",
            skill: "Adapt arguments for different audiences and purposes.",
            sections: [
              ["Know your audience", "**Audience** = who will read your argument. **Purpose** = why you're writing (inform, persuade, explain)."],
              ["Adapting", "Change **tone**, **language**, and **evidence** based on audience. Formal for officials, casual for friends."],
            ],
            formulas: [["Audience/purpose", "Adapt tone and evidence for who reads and why."]],
            worked: { problem: "Write about school uniforms for (a) students and (b) school board. How would you adapt?", solution: "**Students: casual tone, peer examples; Board: formal tone, research data, policy implications.**" },
            questions: Q8(
              one.mcqF("'Audience' refers to...", [["a","the author"],["b","who will read your writing"],["c","the topic"],["d","the purpose"]], "b", "Who reads.", "who will read your writing", "Confuses with author."),
              one.mcqC("To adapt writing for different audiences, you should change...", [["a","only the topic"],["b","tone, language, and evidence"],["c","only the title"],["d","nothing"]], "b", "Tone + language + evidence.", "tone, language, and evidence", "Too narrow."),
              op("core", "Describe how you would adapt an argument about homework for two different audiences: your teacher and your friends.",
                [P("skill", "Audience", "Two adaptations.")],
                [S("Describes adaptations.", 1, "M")], "**Teacher: formal, cite research, respectful tone; Friends: casual, relatable examples, conversational tone.**", ["Same for both.", "Cannot adapt."]),
              one.mcqF("'Purpose' in writing refers to...", [["a","the topic"],["b","why you are writing"],["c","the audience"],["d","the length"]], "b", "Why writing.", "why you are writing", "Confuses with topic."),
              two.opH("Explain how you would adapt a persuasive argument for a formal audience vs an informal audience.",
                [P("skill", "Audience", "Two adaptations.")],
                [S("Describes formal.", 1, "M"), S("Describes informal.", 1, "B")], "**Formal: statistics, expert quotes, professional tone; Informal: personal stories, casual language, relatable examples.**", ["Cannot adapt.", "Same for both."]),
              vocabQs([["Audience", "Who it's for."], ["Purpose", "Why writing."], ["Tone", "Attitude."], ["Formal", "Official."], ["Informal", "Casual."], ["Adapt", "Change for audience."], ["Consider", "Think about."], ["Effective", "Works well."]], 3),
            ),
          }),
        `;
content = content.replace(u5Marker, u5Lesson + u5Marker);

// Unit 6 lesson
const u6Marker = 'lesson("narrative-informative-review"';
const u6Lesson = `lesson("descriptive-details", "Descriptive Details", "I CAN use descriptive details in narratives and informative texts.", ["W.6.3", "W.6.2"],
          [["Description", "Details about."], ["Sensory", "Five senses."], ["Imagery", "Mental pictures."], ["Vivid", "Clear/lively."], ["Specific", "Detailed."], ["Concrete", "Real/tangible."], ["Abstract", "Ideas."], ["Engage", "Capture interest."]],
          {
            title: "Descriptive details",
            skill: "Use sensory and specific details to create vivid descriptions in writing.",
            sections: [
              ["Show don't tell", "Use **sensory details** (sight, sound, smell, taste, touch) instead of just saying things. 'The air smelled of salt and seaweed' vs 'It smelled good.'"],
              ["Specific vs abstract", "**Specific/concrete** details ('a red apple') are more vivid than **abstract** ('fruit')."],
            ],
            formulas: [["Description", "Sensory + specific details = vivid writing."]],
            worked: { problem: "Rewrite 'The food was good' using sensory details.", solution: "**'The stew simmered with rich aromas of garlic and thyme; each spoonful was hearty and warm.'**" },
            questions: Q8(
              one.mcqF("'Sensory details' appeal to...", [["a","only sight"],["b","the five senses"],["c","only sound"],["d","only taste"]], "b", "Five senses.", "the five senses", "Too narrow."),
              one.mcqC("'Show don't tell' means...", [["a","just state facts"],["b","use details to create images"],["c","be brief"],["d","use opinions"]], "b", "Use details for images.", "use details to create images", "Wrong meaning."),
              op("core", "Rewrite this sentence with sensory details: 'The beach was nice.'",
                [P("skill", "Description", "Sensory rewrite.")],
                [S("Rewrites with details.", 1, "M")], "**'The beach stretched golden under the sun, waves crashing rhythmically, salt spray kissing my skin.'**", ["No sensory details.", "Still vague."]),
              one.mcqF("'Concrete details' are...", [["a","abstract ideas"],["b","specific, tangible things"],["c","opinions"],["d","questions"]], "b", "Specific/tangible.", "specific, tangible things", "Confuses with abstract."),
              two.opH("Write a descriptive paragraph using at least three different sensory details.",
                [P("skill", "Description", "Three senses.")],
                [S("Writes description.", 1, "M"), S("Uses three senses.", 1, "B")], "**e.g., 'The bakery smelled of fresh bread (smell); the warm loaves felt crusty (touch); the display glowed golden (sight).'**", ["Fewer than three.", "No sensory details."]),
              vocabQs([["Description", "Details about."], ["Sensory", "Five senses."], ["Imagery", "Mental pictures."], ["Vivid", "Clear/lively."], ["Specific", "Detailed."], ["Concrete", "Real/tangible."], ["Abstract", "Ideas."], ["Engage", "Capture interest."]], 3),
            ),
          }),
        `;
content = content.replace(u6Marker, u6Lesson + u6Marker);

// Unit 7 lesson
const u7Marker = 'lesson("language-review"';
const u7Lesson = `lesson("word-parts", "Word Parts: Roots, Prefixes, Suffixes", "I CAN use word parts to determine meaning.", ["L.6.4"],
          [["Root", "Base meaning."], ["Prefix", "Beginning."], ["Suffix", "End."], ["Combine", "Put together."], ["Meaning", "What word means."], ["Un-", "Not."], ["Re-", "Again."], ["-tion", "Noun ending."]],
          {
            title: "Word parts",
            skill: "Use roots, prefixes, and suffixes to determine word meanings.",
            sections: [
              ["Breaking down", "**Root** = base meaning; **prefix** = beginning (un-, re-, pre-); **suffix** = end (-tion, -ly, -able)."],
              ["Combining", "Put parts together: 'unhappy' = un- (not) + happy = not happy. 'Rewrite' = re- (again) + write = write again."],
            ],
            formulas: [["Word parts", "Prefix + root + suffix = complete meaning."]],
            worked: { problem: "What does 'unhappiness' mean? Break it down.", solution: "**un- (not) + happy + -ness (state) = state of not being happy.**" },
            questions: Q8(
              one.mcqF("A 'root' is...", [["a","beginning of word"],["b","base meaning"],["c","end of word"],["d","whole word"]], "b", "Base meaning.", "base meaning", "Confuses with affix."),
              one.mcqC("In 'rewrite', the prefix 're-' means...", [["a","not"],["b","again"],["c","before"],["d","after"]], "b", "Again.", "again", "Wrong meaning."),
              op("core", "Break down the word 'unbelievable' into its parts and explain the meaning.",
                [P("skill", "Word parts", "Parts + meaning.")],
                [S("Breaks down word.", 1, "M")], "**un- (not) + believe + -able (can be) = cannot be believed; very surprising.**", ["Wrong breakdown.", "Cannot explain."]),
              one.mcqF("A 'suffix' is...", [["a","beginning of word"],["b","end of word"],["c","base meaning"],["d","whole word"]], "b", "End of word.", "end of word", "Confuses with prefix."),
              two.opH("Break down a word into prefix, root, and suffix, then explain how the parts create the meaning.",
                [P("skill", "Word parts", "Breakdown + meaning.")],
                [S("Breaks down word.", 1, "M"), S("Explains meaning.", 1, "B")], "**e.g., 'Misunderstand: mis- (wrongly) + under + stand = understand incorrectly.'**", ["Cannot break down.", "No meaning explained."]),
              vocabQs([["Root", "Base meaning."], ["Prefix", "Beginning."], ["Suffix", "End."], ["Combine", "Put together."], ["Meaning", "What word means."], ["Un-", "Not."], ["Re-", "Again."], ["-tion", "Noun ending."]], 3),
            ),
          }),
        `;
content = content.replace(u7Marker, u7Lesson + u7Marker);

fs.writeFileSync('scripts/data-us-g6-ela.cjs', content);
console.log('Added 5 lessons');
