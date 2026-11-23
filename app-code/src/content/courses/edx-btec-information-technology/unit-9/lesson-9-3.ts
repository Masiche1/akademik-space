import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "edxbtecit-u9-lesson-9-3",
  code: "9-3",
  title: "Audio and Video Authoring",
  goal: "I CAN explain digital audio sampling, video parameters and the tools used to author multimedia products.",
  standards: ["Pearson BTEC Level 3 National Information Technology — Specialist unit: Digital Graphics and Multimedia", "Digital audio, digital video and multimedia authoring"],
  
  vocabulary: [
    { term: "Sampling", definition: "Measuring sound amplitude at regular intervals to digitise audio." },
    { term: "Sample rate", definition: "Number of samples taken per second, measured in Hz/kHz." },
    { term: "Bit depth", definition: "Number of bits per audio sample — determines dynamic range." },
    { term: "Bitrate", definition: "Amount of data used per second of audio or video, in bits per second." },
    { term: "Codec", definition: "Coder-decoder — algorithm compressing and decompressing media." },
    { term: "Frame rate", definition: "Number of video frames displayed per second (fps)." },
    { term: "Container format", definition: "File wrapper holding compressed media streams, e.g. MP4." },
  ],
  concepts: [
    {
      id: "edxbtecit-u9-l3-audio",
      title: "Digital audio",
      skill: "Explain audio sampling and calculate uncompressed audio file sizes and bitrates.",
      lesson: {
        sections: [
          {
            heading: "Digitising sound",
            body: "Sound is analogue — a continuous wave. **Sampling** measures amplitude at regular intervals (**sample rate**, e.g. 44.1 kHz CD quality). **Bit depth** stores each sample's precision (16-bit CD standard).\n\n**File size** = sample rate × bit depth × channels × duration ÷ 8 bytes. Stereo = 2 channels. **Dynamic range** = difference between quietest and loudest sounds captured — higher bit depth = better range.\n\n**Bitrate** = bits per second. **Lossy** compression (MP3, AAC) discards imperceptible detail for small files; **lossless** (WAV, FLAC) keeps everything. CD ≈ 1,411 kbps; MP3 ≈ 128-320 kbps.",
          },
          {
            heading: "Audio editing",
            body: "Editing operations: trim, fade in/out, normalise (peak to a target level), equalisation (adjust frequencies), noise reduction, mixing multiple tracks.\n\nFormats: WAV (uncompressed), MP3/AAC (lossy), FLAC (lossless compressed). Choose based on quality needs vs file size.",
          },
        ],
        keyFormulas: [
          { name: "Audio file size", statement: "size (bytes) = sample rate × bit depth × channels × seconds ÷ 8" },
          { name: "CD quality", statement: "44.1 kHz, 16-bit, stereo ≈ 10.1 MB per minute" },
          { name: "Bitrate", statement: "bits per second of audio" },
        ],
        workedExample: {
          problem: "Calculate the size of a 3-minute stereo recording at 44.1 kHz, 16-bit.",
          solution: "44,100 × 16 × 2 × 180 ÷ 8 = 44,100 × 16 × 2 × 180 = 254,016,000 bits ÷ 8 = 31,752,000 bytes ≈ 30.3 MB.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u9-l3-audio-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does sample rate measure?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bits per sample"
                    },
                    {
                              "id": "b",
                              "text": "Samples taken per second"
                    },
                    {
                              "id": "c",
                              "text": "File size"
                    },
                    {
                              "id": "d",
                              "text": "Volume level"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sample rate",
                              "statement": "Number of amplitude measurements per second."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sample rate = samples per second.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Samples per second"
},
        },
        {
          id: "edxbtecit-u9-l3-audio-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the difference between bit depth and sample rate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bit depth vs rate",
                              "statement": "Precision per sample vs samples per second."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bit depth = bits per sample (precision/dynamic range).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sample rate = samples per second (frequency range).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Bit depth = precision per sample; rate = samples/sec"
},
        },
        {
          id: "edxbtecit-u9-l3-audio-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why MP3 files are much smaller than WAV files of the same recording.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Lossy compression",
                              "statement": "MP3 discards less-noticeable audio detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "WAV stores every sample uncompressed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "MP3 uses lossy compression removing imperceptible frequencies.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Result: much smaller files with minor quality loss.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "MP3 = lossy compression discards detail; WAV = uncompressed"
},
        },
        {
          id: "edxbtecit-u9-l3-audio-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Calculate the file size of a 60-second mono recording at 22.05 kHz, 8-bit. Show working.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "file size",
                              "answer": 132300,
                              "tolerance": 10,
                              "unit": "bytes"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Audio size",
                              "statement": "rate × depth × channels × seconds ÷ 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "22,050 × 8 × 1 × 60 = 10,584,000 bits.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "÷ 8 = 1,323,000 bytes.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "≈ 1.26 MB.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1,323,000 bytes ≈ 1.26 MB",
          "commonErrors": [
                    "Using 44.1 kHz instead of 22.05 kHz.",
                    "Forgetting ÷8."
          ]
},
        },
        {
          id: "edxbtecit-u9-l3-audio-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State the CD audio standard parameters.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain what dynamic range means in audio.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Name two common audio editing operations.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Audio parameters",
                              "statement": "Rate, depth, dynamic range, editing."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "44.1 kHz sample rate, 16-bit depth, stereo.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Range between quietest and loudest captured sounds.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Higher bit depth = better dynamic range.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Trim, fade, normalise, equalise, mix.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Second operation named.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "CD = 44.1kHz/16-bit/stereo; dynamic range; editing ops"
},
        },
        {
          id: "edxbtecit-u9-l3-audio-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define sampling and bit depth. (b) State the file size formula for audio. (c) Calculate the size of 30 seconds at 48 kHz, 24-bit, stereo. (d) Explain lossy vs lossless compression. (e) Name two audio formats and their typical use. (f) What is bitrate?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define sampling and bit depth.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "File size formula.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "30 s, 48 kHz, 24-bit, stereo size.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Lossy vs lossless.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Two formats and uses.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Define bitrate.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Digital audio",
                              "statement": "Sampling, depth, size, compression."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sampling = amplitude measurements/sec; bit depth = bits per sample.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both defined.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "rate × depth × channels × seconds ÷ 8.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "48,000 × 24 × 2 × 30 ÷ 8 = 8,640,000 bytes ≈ 8.24 MB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Lossy discards detail (MP3); lossless keeps all (WAV/FLAC).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "WAV uncompressed/mastering; MP3 distribution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Second format with use.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Bits of data per second.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Audio digitisation, size ≈ 8.24 MB, compression and formats."
},
        },
      ],
    },
    {
      id: "edxbtecit-u9-l3-video",
      title: "Digital video and multimedia authoring",
      skill: "Explain video parameters (fps, resolution, bitrate) and describe authoring tools for multimedia products.",
      lesson: {
        sections: [
          {
            heading: "Digital video",
            body: "Video = sequence of still frames played fast. **Frame rate** (fps): 24 = film, 25/30 = TV, 60 = smooth action. Higher fps = smoother motion, bigger files. **Resolution**: 720p, 1080p, 4K — more pixels = more detail, bigger files.\n\n**Codecs** compress video: H.264 (standard), H.265/HEVC (better compression), VP9, AV1. **Container** formats (MP4, MKV, MOV) wrap compressed streams with audio/subtitles. **Bitrate** controls quality vs size — higher = better quality, larger file.",
          },
          {
            heading: "Multimedia authoring",
            body: "Authoring tools combine media: **presentation software** (slideshows), **video editors** (Premiere, DaVinci, iMovie), **audio editors** (Audacity), **animation tools**, **interactive authoring** (e-learning, games).\n\nAuthoring workflow: plan → gather/create assets → edit → add interactivity (buttons, hyperlinks, quizzes) → test → publish. Consider audience, purpose, platform constraints and accessibility (captions, alt text).",
          },
        ],
        keyFormulas: [
          { name: "Frame rate", statement: "24 film, 25/30 TV, 60 action" },
          { name: "Bitrate", statement: "Higher bitrate = better quality, larger file" },
          { name: "Codec vs container", statement: "Codec compresses; container wraps streams" },
        ],
        workedExample: {
          problem: "A 2-minute 1080p video at 24 fps is exported at 5 Mbps. Estimate the file size.",
          solution: "Size = bitrate × duration = 5 Mbit/s × 120 s = 600 Mbit = 75 MB.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u9-l3-video-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does fps measure?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "File size"
                    },
                    {
                              "id": "b",
                              "text": "Frames per second"
                    },
                    {
                              "id": "c",
                              "text": "Colour depth"
                    },
                    {
                              "id": "d",
                              "text": "Bitrate"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Frame rate",
                              "statement": "Frames displayed per second."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "fps = frames per second.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Frames per second"
},
        },
        {
          id: "edxbtecit-u9-l3-video-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a codec and a container format?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Codec vs container",
                              "statement": "Compression algorithm vs file wrapper."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Codec compresses/decompresses the media data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Container wraps compressed streams (video+audio) in a file, e.g. MP4.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Codec compresses; container packages"
},
        },
        {
          id: "edxbtecit-u9-l3-video-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why higher bitrate improves video quality but increases file size.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Bitrate trade-off",
                              "statement": "More bits per second = more detail retained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher bitrate allows codec to keep more image detail.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More data per second = larger file.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Trade-off between quality and storage/bandwidth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "More bits = better quality but bigger files"
},
        },
        {
          id: "edxbtecit-u9-l3-video-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A 90-second video is encoded at 4 Mbps. Calculate its file size in MB.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "file size",
                              "answer": 45,
                              "tolerance": 0.5,
                              "unit": "MB"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Video size",
                              "statement": "size = bitrate × duration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 Mbit/s × 90 s = 360 Mbit.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "360 ÷ 8 = 45 MB.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer in MB.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "45 MB",
          "commonErrors": [
                    "Forgetting to convert Mbit to MB (÷8)."
          ]
},
        },
        {
          id: "edxbtecit-u9-l3-video-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State typical frame rates for film, TV and action video.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name two video codecs and one container format.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "List three steps in a multimedia authoring workflow.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Video authoring",
                              "statement": "fps, codecs, workflow."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "24 film, 25/30 TV, 60 action.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Codecs: H.264/H.265; container: MP4/MKV.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Correct codec and container named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Plan/gather assets, edit, add interactivity, test, publish.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Third step named.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "fps values; codecs/containers; authoring workflow steps"
},
        },
        {
          id: "edxbtecit-u9-l3-video-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define frame rate and bitrate. (b) State typical fps for film and TV. (c) Explain codec vs container. (d) Calculate the size of a 120-second video at 6 Mbps. (e) Name two factors that increase video file size. (f) Give two considerations when authoring multimedia for accessibility.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define frame rate and bitrate.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Film and TV fps.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Codec vs container.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "120 s at 6 Mbps size.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Two size factors.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Two accessibility considerations.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Video authoring",
                              "statement": "fps, bitrate, codecs, accessibility."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Frame rate = frames/sec; bitrate = bits/sec of data.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "24 film; 25/30 TV.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Codec compresses; container wraps streams.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Both distinguished.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "6 × 120 = 720 Mbit ÷ 8 = 90 MB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Higher resolution/fps/bitrate increase size.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Captions/subtitles and alt text/descriptions.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Video parameters, 90 MB size, codecs and accessibility."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u9-n103-notes",
      title: "Multimedia 9-3 — notes",
      summary: "Audio: rate×depth×channels×time÷8; video: bitrate×time; codec compresses, container wraps.",
      sections: [
        { heading: "Key idea", body: "Higher quality always means more data — balance against file size and bandwidth." },
        { heading: "Formulas", body: "Audio bytes = rate × depth × channels × s ÷ 8; video bytes = bitrate × s ÷ 8." },
        { heading: "Authoring", body: "Plan → assets → edit → interactivity → test → publish; include captions/alt text." },
      ],
    },
  ],
};
