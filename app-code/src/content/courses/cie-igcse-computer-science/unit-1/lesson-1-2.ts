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
                              "text": "Rules mapping characters to binary codes"
                    },
                    {
                              "id": "b",
                              "text": "A file format"
                    },
                    {
                              "id": "c",
                              "text": "A type of font"
                    },
                    {
                              "id": "d",
                              "text": "A network protocol"
                    }
          ],
          "correctChoiceId": "a"
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
