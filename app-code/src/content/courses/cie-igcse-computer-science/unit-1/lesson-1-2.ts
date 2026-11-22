import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ciecs-u1-lesson-1-2",
  code: "1-2",
  title: "Text, Graphics and Sound Representation",
  goal: "I CAN explain how text, images and sound are represented as binary data.",
  standards: ["Cambridge IGCSE Computer Science 0478: data representation", "0478 section 1: text/graphics/sound"],
  
  vocabulary: [
    { term: "Character encoding", definition: "Rules mapping characters to binary codes." },
    { term: "ASCII", definition: "7-bit encoding for basic English characters." },
    { term: "Unicode", definition: "Universal encoding for all languages and symbols." },
    { term: "Pixel", definition: "Smallest picture element — a coloured dot." },
    { term: "Resolution", definition: "Number of pixels in an image." },
    { term: "Sound sampling", definition: "Measuring sound amplitude at intervals." },
  ],
  concepts: [
    {
      id: "ciecs-u1-s2-media",
      title: "Media data representation",
      skill: "Explain binary encoding of text, graphics and sound at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Text encoding",
            body: "Characters stored as binary codes. ASCII: 7 bits, 128 characters, English only. Unicode: more bits, covers all languages, emoji, symbols. File size grows with text length × bits per character.",
          },
          {
            heading: "Graphics and sound",
            body: "Images = pixel grids; each pixel has colour values. Resolution (pixel count) and colour depth (bits per pixel) determine quality/size. Sound = sampled amplitude values stored as binary numbers; higher sample rate = better quality.",
          },
        ],
        keyFormulas: [
          { name: "ASCII", statement: "7-bit English encoding" },
          { name: "Unicode", statement: "universal multi-language encoding" },
          { name: "Colour depth", statement: "bits per pixel — more = more colours" },
        ],
        workedExample: {
          problem: "Why does a 24-bit colour photo take more space than an 8-bit one?",
          solution: "24 bits/pixel × pixels = 3× more binary data per pixel than 8 bits. More colours = bigger file.",
        },
      },
      questions: [
        {
          id: "ciecs-u1-md-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is character encoding?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A file format"
                    },
                    {
                              "id": "b",
                              "text": "A network protocol"
                    },
                    {
                              "id": "c",
                              "text": "Rules mapping characters to binary codes"
                    },
                    {
                              "id": "d",
                              "text": "A type of font"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Character encoding",
                              "statement": "Char→binary mapping."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Encoding = char↔binary rules.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Char→binary rules"
},
        },
        {
          id: "ciecs-u1-md-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between ASCII and Unicode?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ASCII vs Unicode",
                              "statement": "English vs universal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ASCII=7-bit English only.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unicode=all languages/symbols.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "English-only vs universal"
},
        },
        {
          id: "ciecs-u1-md-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how sound is represented as binary data. What affects file size?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sound encoding",
                              "statement": "Sampling and amplitude."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Amplitude measured at intervals, stored as binary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sample rate + bit depth affect quality/size.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Higher rate = better quality, bigger file.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Sampled amplitude; rate+depth affect size"
},
        },
        {
          id: "ciecs-u1-md-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define character encoding, ASCII, Unicode, pixel, resolution, colour depth, sound sampling. (b) Why is Unicode needed? (c) How many characters can ASCII represent? (d) What is a pixel? (e) How does resolution affect image size? (f) What is 24-bit colour? (g) Why do emojis need Unicode? (h) Compare storing 'Hi' as text vs as an image.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Media representation",
                              "statement": "Text, graphics, sound encoding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All seven definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Covers all languages/symbols.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 128 (2^7).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Smallest image element.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) More pixels = bigger file.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) 24 bits/pixel = 16.7M colours.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Emojis are symbols beyond ASCII.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Text=tiny char codes; image=thousands of pixels.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Text, graphics and sound binary encoding."
},
        },
        {
          id: "ciecs-u1-md-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which character encoding can represent symbols from many languages, including emoji?",
          response: { "type": "mcq", "choices": [ { "id": "a", "text": "Run-length encoding" }, { "id": "b", "text": "ASCII" }, { "id": "c", "text": "Unicode" }, { "id": "d", "text": "Binary-coded decimal" } ], "correctChoiceId": "c" },
          markscheme: { "principles": [ { "kind": "definition", "name": "Unicode", "statement": "Universal multi-language encoding." } ], "steps": [ { "reasoning": "Unicode covers many languages and symbols; ASCII is English-focused.", "marks": 1, "markCode": "M" } ], "finalAnswer": "**(b)** Unicode" }
        },
        {
          id: "ciecs-u1-md-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does colour depth measure for a bitmap image?",
          response: { "type": "mcq", "choices": [ { "id": "a", "text": "The number of pixels in the image" }, { "id": "b", "text": "The number of images in a folder" }, { "id": "c", "text": "The number of bits used for each pixel" }, { "id": "d", "text": "The physical width of the screen" } ], "correctChoiceId": "c" },
          markscheme: { "principles": [ { "kind": "definition", "name": "Colour depth", "statement": "Bits per pixel." } ], "steps": [ { "reasoning": "Colour depth is the number of bits storing each pixel's colour.", "marks": 1, "markCode": "M" } ], "finalAnswer": "**(a)** Bits used for each pixel" }
        },
        {
          id: "ciecs-u1-md-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a pixel?",
          response: { "type": "mcq", "choices": [ { "id": "a", "text": "A sound sample" }, { "id": "b", "text": "The smallest picture element in a digital image" }, { "id": "c", "text": "A network packet" }, { "id": "d", "text": "A type of image file" } ], "borrectChoiceId": "c" },
          markscheme: { "principles": [ { "kind": "definition", "name": "Pixel", "statement": "Smallest image element." } ], "steps": [ { "reasoning": "A pixel is one coloured element in a bitmap image.", "marks": 1, "markCode": "M" } ], "finalAnswer": "**(c)** Smallest picture element" }
        },
        {
          id: "ciecs-u1-md-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which change would increase the file size of a bitmap image the most?",
          response: { "type": "mcq", "choices": [ { "id": "a", "text": "Doubling the resolution only" }, { "id": "b", "text": "Doubling the colour depth only" }, { "id": "c", "text": "Doubling both resolution and colour depth" }, { "id": "d", "text": "Changing only the file name" } ], "correctChoiceIc": "d" },
          markscheme: { "principles": [ { "kind": "skill", "name": "Image size", "statement": "Pixels × bits per pixel." } ], "steps": [ { "reasoning": "File size depends on both pixel count and colour depth, so increasing both has the largest effect.", "marks": 1, "markCode": "M" } ], "finalAnswer": "**(d)** Doubling both resolution and colour depth" }
        },
        {
          id: "ciecs-u1-md-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A sound file is sampled at $8$ kHz using $8$-bit samples. If the sample rate doubles but the bit depth stays the same, what happens to the file size?",
          response: { "type": "mcq", "choices": [ { "id": "a", "text": "It halves" }, { "id": "b", "text": "It doubles" }, { "id": "c", "text": "It stays the same" }, { "id": "d", "text": "It becomes four times larger" } ], "correctChoiceId": "b" },
          markscheme: { "principles": [ { "kind": "skill", "name": "Sound size", "statement": "Samples × bits per sample." } ], "steps": [ { "reasoning": "Doubling samples per second doubles the stored data when bit depth is unchanged.", "marks": 1, "markCode": "M" } ], "finalAnswer": "**(b)** It doubles" }
        },
        {
          id: "ciecs-u1-md-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many different characters can standard $7$-bit ASCII represent?",
          response: { "type": "mcq", "choices": [ { "id": "a", "text": "$256$" }, { "id": "b", "text": "$128$" }, { "id": "c", "text": "$64$" }, { "id": "d", "text": "$1024$" } ], "correctChoiceId": "b" },
          markscheme: { "principles": [ { "kind": "skill", "name": "ASCII capacity", "statement": "$2^7 = 128$ codes." } ], "steps": [ { "reasoning": "$2^7 = 128$ possible codes.", "marks": 1, "markCode": "M" } ], "finalAnswer": "**(a)** $128$" }
        },
        {
          id: "ciecs-u1-md-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A plain-text message contains $25$ characters and is encoded using $7$-bit ASCII. How many bits are needed for the message?",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 175 } ] },
          markscheme: { "principles": [ { "kind": "skill", "name": "Text size", "statement": "Characters × bits per character." } ], "steps": [ { "part": "a", "reasoning": "Multiply the number of characters by the bits per character.", "marks": 1, "markCode": "M" }, { "part": "a", "reasoning": "$25 \\times 7 = 175$ bits.", "marks": 1, "markCode": "A" } ], "finalAnswer": "175 bits" }
        },
        {
          id: "ciecs-u1-md-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "An uncompressed bitmap is $320$ pixels wide, $240$ pixels high, and uses $24$ bits per pixel. How many bits does the image data require?",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 1843200 } ] },
          markscheme: { "principles": [ { "kind": "skill", "name": "Bitmap size", "statement": "Width × height × colour depth." } ], "steps": [ { "part": "a", "reasoning": "Multiply width, height and bits per pixel.", "marks": 1, "markCode": "M" }, { "part": "a", "reasoning": "$320 \\times 240 \\times 24 = 1843200$ bits.", "marks": 1, "markCode": "A" } ], "finalAnswer": "1843200 bits" }
        },
        {
          id: "ciecs-u1-md-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A mono sound recording lasts $10$ seconds, is sampled $8000$ times per second, and stores $8$ bits per sample. How many bits are stored?",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 640000 } ] },
          markscheme: { "principles": [ { "kind": "skill", "name": "Sound size", "statement": "Duration × sample rate × bit depth." } ], "steps": [ { "part": "a", "reasoning": "Multiply duration, sample rate and bits per sample.", "marks": 1, "markCode": "M" }, { "part": "a", "reasoning": "$10 \\times 8000 \\times 8 = 640000$ bits.", "marks": 1, "markCode": "A" } ], "finalAnswer": "640000 bits" }
        },
        {
          id: "ciecs-u1-md-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A file stores $50$ ASCII characters using $7$ bits per character and a $16$ by $16$ pixel icon using $8$ bits per pixel. How many bits are needed in total?",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 2398 } ] },
          markscheme: { "principles": [ { "kind": "skill", "name": "Mixed media size", "statement": "Sum text and image data sizes." } ], "steps": [ { "part": "a", "reasoning": "Text needs $50 \\times 7 = 350$ bits.", "marks": 1, "markCode": "M" }, { "part": "a", "reasoning": "Icon needs $16 \\times 16 \\times 8 = 2048$ bits.", "marks": 1, "markCode": "M" }, { "part": "a", "reasoning": "Total is $350 + 2048 = 2398$ bits.", "marks": 1, "markCode": "A" } ], "finalAnswer": "2398 bits" }
        },
        {
          id: "ciecs-u1-md-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A mono recording uses $44100$ samples per second, $16$ bits per sample, and lasts $30$ seconds. How many bits are stored?",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 21168000 } ] },
          markscheme: { "principles": [ { "kind": "skill", "name": "Sound size", "statement": "Duration × sample rate × bit depth." } ], "steps": [ { "part": "a", "reasoning": "First find samples: $30 \\times 44100 = 1323000$.", "marks": 1, "markCode": "M" }, { "part": "a", "reasoning": "Then multiply by bits per sample.", "marks": 1, "markCode": "M" }, { "part": "a", "reasoning": "$1323000 \\times 16 = 21168000$ bits.", "marks": 1, "markCode": "A" } ], "finalAnswer": "21168000 bits" }
        },
        {
          id: "ciecs-u1-md-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a Unicode document containing emoji can be larger than an ASCII-only document of the same visible length, and state when Unicode is necessary.",
          response: { "type": "open" },
          markscheme: { "principles": [ { "kind": "comparison", "name": "ASCII vs Unicode", "statement": "Limited English codes vs broader symbol coverage." } ], "steps": [ { "reasoning": "Unicode uses more bits or variable-length codes for symbols outside ASCII.", "marks": 1, "markCode": "M" }, { "reasoning": "Emoji and non-English characters require Unicode because ASCII cannot represent them.", "marks": 1, "markCode": "M" }, { "reasoning": "The file is larger because more binary data is needed for the extra symbols.", "marks": 1, "markCode": "A" } ], "finalAnswer": "Unicode needs more bits for symbols ASCII cannot store." }
        }
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u1-md-notes",
      title: "Media representation — notes",
      summary: "Text=char codes (ASCII/Unicode); images=pixels; sound=samples. Size depends on depth/rate.",
      sections: [
        { heading: "Key idea", body: "All media becomes binary numbers with encoding rules." },
        { heading: "Size", body: "Higher quality = more bits = bigger files." },
      ],
    },
  ],
};
