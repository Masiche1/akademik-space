import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "olcs-u2-lesson-2-1",
  code: "2-1",
  title: "Packets and Transmission Methods",
  goal: "I CAN explain packet switching, serial and parallel transmission, and the USB interface.",
  standards: ["2210 2.1.1", "2210 2.1.2", "2210 2.1.3"],
  vocabulary: [
    { term: "Packet", definition: "Small block of data with an address and error-checking information, sent over a network." },
    { term: "Packet switching", definition: "Breaking data into packets that travel independently and are reassembled at the destination." },
    { term: "Serial transmission", definition: "Bits sent one at a time along a single wire; used over long distances." },
    { term: "Parallel transmission", definition: "Several bits sent simultaneously along multiple wires; fast but only over short distances." },
    { term: "USB", definition: "Universal Serial Bus — a serial interface for connecting peripherals; carries power and data." },
  ],
  concepts: [
    {
      id: "olcs-u2-packets",
      title: "Packets and packet switching",
      skill: "Explain how data is broken into packets and routed across networks.",
      lesson: {
        sections: [
          { heading: "Why packets?", body: "Networks can't send huge files as one stream — a break would lose everything. Instead data is split into **packets**, each with:\n\n- the data itself\n- source and destination addresses\n- sequence number\n- error-checking bits\n\nPackets travel independently and may take different routes; the receiver reassembles them in order." },
          { heading: "Packet switching advantages", body: "- Efficient use of network links — many users share the same lines.\n- Resilient: if one route fails, packets can reroute.\n- Fair: no single transfer blocks others.\n\nDisadvantage: overhead from headers, and possible out-of-order arrival needing reassembly." },
          { heading: "Circuit vs packet switching", body: "Old telephone-style **circuit switching** reserves a dedicated path for the whole call — wasteful for bursty data. The internet uses packet switching." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A 1 MB file is split into packets of 1000 bytes. How many packets are needed (ignoring headers)?",
          solution: "$1\\text{ MB} = 1\\,048\\,576$ bytes → $1\\,048\\,576 / 1000 \\approx 1049$ packets.",
        },
      },
      questions: [
        {
          id: "olcs-u2-pk-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which item is NOT part of a typical packet?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sequence number" },
            { id: "b", text: "Data payload" },
            { id: "c", text: "Destination address" },
            { id: "d", text: "User password" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Packet contents", statement: "Address, payload, sequence, error check." }], steps: [{ reasoning: "Password isn't a packet field.", working: "\\text{password}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** User password" },
        },
        {
          id: "olcs-u2-pk-q2", difficulty: "core", totalMarks: 2,
          stem: "State two advantages of packet switching over circuit switching.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Packet switching", statement: "Shared links, resilient routing." }], steps: [
            { reasoning: "Efficient shared use of links.", working: "\\text{shared links}", marks: 1, markCode: "M" },
            { reasoning: "Reroutes around failures.", working: "\\text{resilience}", marks: 1, markCode: "A" },
          ], finalAnswer: "Efficient link sharing; resilient rerouting around failures." },
        },
        {
          id: "olcs-u2-pk-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why packets may arrive out of order and how the receiver copes.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Reassembly", statement: "Sequence numbers order packets." }], steps: [
            { reasoning: "Different routes → different delays.", working: "\\text{different paths}", marks: 1, markCode: "M" },
            { reasoning: "Sequence numbers identify order.", working: "\\text{sequence no.}", marks: 1, markCode: "M" },
            { reasoning: "Receiver buffers and reassembles in order.", working: "\\text{reassemble}", marks: 1, markCode: "M" },
            { reasoning: "Missing packets are requested again.", marks: 1, markCode: "A" },
          ], finalAnswer: "Packets take different routes; sequence numbers let the receiver reorder them and request any missing." },
        },
        {
          id: "olcs-u2-pk-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Packets and networks review.",
          parts: [
            { label: "a", prompt: "List three items stored in a packet header.", marks: 3 },
            { label: "b", prompt: "State one advantage and one disadvantage of packet switching.", marks: 2 },
            { label: "c", prompt: "A 500 kB message uses 500-byte packets. How many packets?", marks: 2 },
            { label: "d", prompt: "Explain why packet switching suits bursty internet traffic.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Packet header", statement: "Address, sequence, error-check fields." },
          ], steps: [
            { part: "a", reasoning: "Any three: source/destination address, sequence number, error check.", working: "\\text{address, seq, check}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct fields listed.", marks: 1, markCode: "A" },
            { part: "a", reasoning: "Third field correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Advantage: shared/resilient links.", working: "\\text{efficiency}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Disadvantage: header overhead/reordering.", working: "\\text{overhead}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$500\\times1024/500 \\approx 1025$ packets.", working: "1025", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Answer ≈1024-1025.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Links shared only when packets flow.", working: "\\text{on-demand}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "No idle reserved capacity wasted.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) address/sequence/check (b) efficient vs overhead (c) ≈1025 (d) capacity used only during transfer" },
        },
        {
          id: "olcs-u2-pk-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The sequence number in a packet is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Encrypt the payload" },
            { id: "b", text: "Reassemble packets in the correct order" },
            { id: "c", text: "Find the sender's password" },
            { id: "d", text: "Compress the data" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Sequence number", statement: "Identifies packet order for reassembly." }], steps: [{ reasoning: "Sequence numbers order packets.", working: "\\text{order}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Reassemble in order" },
        },
        {
          id: "olcs-u2-pk-q6", difficulty: "core", totalMarks: 2,
          stem: "A 2 MB file is split into 1024-byte packets. How many packets are needed?",
          response: { type: "numeric", parts: [{ label: "Packets", answer: 2048 }] },
          markscheme: { principles: [{ kind: "formula", name: "Packet count", statement: "size $\\div$ packet size." }], steps: [
            { reasoning: "$2\\times1024^2/1024=2048$.", working: "2048", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "2048", marks: 1, markCode: "A" },
          ], finalAnswer: "2048" },
        },
        {
          id: "olcs-u2-pk-q7", difficulty: "foundation", totalMarks: 1,
          stem: "In packet switching, individual packets may…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Never be reordered" },
            { id: "b", text: "Travel by different routes" },
            { id: "c", text: "Bypass all routers" },
            { id: "d", text: "Only travel together" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Packet switching", statement: "Packets routed independently." }], steps: [{ reasoning: "Each packet can take its own path.", working: "\\text{different routes}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Travel by different routes" },
        },
        {
          id: "olcs-u2-pk-q8", difficulty: "core", totalMarks: 2,
          stem: "A message of 90 000 bytes is split into packets with a payload of 300 bytes each. How many packets are needed?",
          response: { type: "numeric", parts: [{ label: "Packets", answer: 300 }] },
          markscheme: { principles: [{ kind: "formula", name: "Packet count", statement: "size $\\div$ payload." }], steps: [
            { reasoning: "$90000/300=300$.", working: "300", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "300", marks: 1, markCode: "A" },
          ], finalAnswer: "300" },
        },
        {
          id: "olcs-u2-pk-q9", difficulty: "core", totalMarks: 2,
          stem: "State one advantage of packet switching for sharing a network link between many users.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Link sharing", statement: "Capacity used only when packets flow." }], steps: [
            { reasoning: "Many users share links efficiently.", working: "\\text{shared}", marks: 1, markCode: "M" },
            { reasoning: "No single transfer reserves the whole link.", marks: 1, markCode: "A" },
          ], finalAnswer: "Links are shared efficiently — capacity is used only while packets are actually being transmitted." },
        },
        {
          id: "olcs-u2-pk-q10", difficulty: "core", totalMarks: 1,
          stem: "Circuit switching differs from packet switching because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Splits data into packets" },
            { id: "b", text: "Reserves a dedicated path for the whole connection" },
            { id: "c", text: "Works only wirelessly" },
            { id: "d", text: "Uses IP addresses" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Circuit switching", statement: "Dedicated path reserved for the session." }], steps: [{ reasoning: "Circuit = reserved path.", working: "\\text{dedicated}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Reserves a dedicated path" },
        },
        {
          id: "olcs-u2-pk-q11", difficulty: "core", totalMarks: 2,
          stem: "A 500 kB message is sent in packets with a payload of 1000 bytes each. How many packets are needed?",
          response: { type: "numeric", parts: [{ label: "Packets", answer: 512 }] },
          markscheme: { principles: [{ kind: "formula", name: "Packet count", statement: "$500\\times1024/1000$." }], steps: [
            { reasoning: "$512000/1000=512$.", working: "512", marks: 1, markCode: "M" },
            { reasoning: "Correct count (≈512).", working: "512", marks: 1, markCode: "A" },
          ], finalAnswer: "512" },
        },
        {
          id: "olcs-u2-pk-q12", difficulty: "core", totalMarks: 2,
          stem: "Which is a disadvantage of packet switching?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It only works for small files" },
            { id: "b", text: "It requires a dedicated path" },
            { id: "c", text: "Header overhead on every packet" },
            { id: "d", text: "It cannot share links" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Overhead", statement: "Headers add extra bytes per packet." }], steps: [{ reasoning: "Each packet carries address/sequence/check overhead.", working: "\\text{header}", marks: 1, markCode: "M" }, { reasoning: "This reduces efficiency slightly.", working: "\\text{overhead}", marks: 1, markCode: "A" }], finalAnswer: "**(c)** Header overhead" },
        },
        {
          id: "olcs-u2-pk-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how packet switching keeps a network working when one link or router fails.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Resilience", statement: "Packets reroute around failures." }], steps: [
            { reasoning: "Packets travel independently via different routes.", working: "\\text{independent}", marks: 1, markCode: "M" },
            { reasoning: "If one route fails, routers send packets another way.", working: "\\text{reroute}", marks: 1, markCode: "M" },
            { reasoning: "Lost packets are detected and resent (ARQ).", working: "\\text{resend}", marks: 1, markCode: "M" },
            { reasoning: "Result: data still arrives despite the failure.", marks: 1, markCode: "A" },
          ], finalAnswer: "Packets reroute around the failure and missing ones are resent, so delivery continues." },
        },
        {
          id: "olcs-u2-pk-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which packet field helps the receiver detect a corrupted packet?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The packet colour" },
            { id: "b", text: "Error-checking bits" },
            { id: "c", text: "The file name" },
            { id: "d", text: "The sender's email" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Error check", statement: "Redundant bits detect corruption." }], steps: [{ reasoning: "Error-check fields detect damage.", working: "\\text{error check}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Error-checking bits" },
        },
        {
          id: "olcs-u2-pk-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A 10 MB file is split into packets with a payload of 1000 bytes each. How many packets are needed?",
          response: { type: "numeric", parts: [{ label: "Packets", answer: 10486 }] },
          markscheme: { principles: [{ kind: "formula", name: "Packet count", statement: "$10\\times1024^2/1000\\approx10486$." }], steps: [
            { reasoning: "$10\\times1024^2=10\\,485\\,760$ bytes.", working: "10485760", marks: 1, markCode: "M" },
            { reasoning: "$10485760/1000=10485.76$ → 10486 packets.", working: "10486", marks: 1, markCode: "M" },
            { reasoning: "Correct rounded count.", working: "10486", marks: 1, markCode: "A" },
          ], finalAnswer: "≈10486" },
        },
        {
          id: "olcs-u2-pk-q16", difficulty: "foundation", totalMarks: 1,
          stem: "Packet switching is the method used by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only USB cables" },
            { id: "b", text: "Only telephones" },
            { id: "c", text: "Only printers" },
            { id: "d", text: "The internet" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Internet", statement: "The internet uses packet switching." }], steps: [{ reasoning: "Internet = packet switched.", working: "\\text{internet}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** The internet" },
        },
      ],
    },
    {
      id: "olcs-u2-transmission",
      title: "Serial, parallel and USB",
      skill: "Compare serial and parallel transmission and describe the USB interface.",
      lesson: {
        sections: [
          { heading: "Serial vs parallel", body: "**Serial**: one bit at a time on one wire — slower per wire but cheap, long-distance, less interference. Used by USB, network cables.\n\n**Parallel**: multiple bits simultaneously on multiple wires — fast over short distances, but wires interfere at high speed/length. Used inside computers (e.g. old printer cables)." },
          { heading: "USB", body: "Universal Serial Bus is a serial interface that carries both data and power. Advantages: hot-swappable, self-configuring, one connector for many devices, supports many devices on one port via hubs. USB 3.x is much faster than USB 2.0." },
          { heading: "Other interfaces", body: "SATA (storage), HDMI/DisplayPort (video), Bluetooth/Wi-Fi (wireless). The syllabus focuses on USB as the key serial example." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is USB preferred over an old parallel printer cable for an external hard drive?",
          solution: "USB is serial, hot-swappable, supplies power, and supports higher speeds over longer cables than parallel links.",
        },
      },
      questions: [
        {
          id: "olcs-u2-tm-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In serial transmission, bits are sent…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Randomly" },
            { id: "b", text: "All at once" },
            { id: "c", text: "One at a time" },
            { id: "d", text: "In pairs" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Serial", statement: "One bit at a time." }], steps: [{ reasoning: "Serial = sequential bits.", working: "\\text{one at a time}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** One at a time" },
        },
        {
          id: "olcs-u2-tm-q2", difficulty: "core", totalMarks: 2,
          stem: "Give one advantage of parallel over serial transmission.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Parallel", statement: "Multiple bits at once → faster short-range." }], steps: [
            { reasoning: "Higher data rate over short distance.", working: "\\text{faster}", marks: 1, markCode: "M" },
            { reasoning: "Correct comparison.", marks: 1, markCode: "A" },
          ], finalAnswer: "Faster data transfer over short distances." },
        },
        {
          id: "olcs-u2-tm-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A school wants to connect 20 devices to one computer. Explain why USB is a suitable choice.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "USB benefits", statement: "Hot-swap, power, hubs, serial reliability." }], steps: [
            { reasoning: "Hubs allow many devices on one port.", working: "\\text{hubs}", marks: 1, markCode: "M" },
            { reasoning: "Supplies power to peripherals.", working: "\\text{power}", marks: 1, markCode: "M" },
            { reasoning: "Hot-swappable — no shutdown needed.", working: "\\text{hot-swap}", marks: 1, markCode: "M" },
            { reasoning: "Reliable serial over long cables.", marks: 1, markCode: "A" },
          ], finalAnswer: "USB hubs support many devices, supply power, and allow hot-swapping." },
        },
        {
          id: "olcs-u2-tm-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Transmission methods review.",
          parts: [
            { label: "a", prompt: "State one advantage of serial over parallel.", marks: 2 },
            { label: "b", prompt: "State one advantage of parallel over serial.", marks: 2 },
            { label: "c", prompt: "List two features of USB that make it convenient.", marks: 2 },
            { label: "d", prompt: "Explain why parallel transmission is rarely used for long cables.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Serial", statement: "Reliable over distance, cheap, one wire." },
            { kind: "principle", name: "Parallel limits", statement: "Interference/crosstalk at length." },
          ], steps: [
            { part: "a", reasoning: "Works over long distances / less interference.", working: "\\text{long range}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct advantage.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Faster over short distance.", working: "\\text{speed}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct advantage.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Any two: hot-swap, power delivery, hubs, self-configuring.", working: "\\text{features}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Second feature correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Adjacent wires interfere (crosstalk).", working: "\\text{crosstalk}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Signal timing skew between wires corrupts data.", working: "\\text{skew}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Conclusion: only short-range use.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) long range (b) fast short-range (c) hot-swap/power (d) crosstalk and skew limit distance" },
        },
        {
          id: "olcs-u2-tm-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Parallel transmission sends data by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sending whole bytes only" },
            { id: "b", text: "Sending several bits at the same time" },
            { id: "c", text: "Sending one bit at a time" },
            { id: "d", text: "Sending bits randomly" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Parallel", statement: "Multiple bits simultaneously." }], steps: [{ reasoning: "Parallel = bits at once.", working: "\\text{simultaneous}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Several bits at once" },
        },
        {
          id: "olcs-u2-tm-q6", difficulty: "core", totalMarks: 2,
          stem: "A serial link runs at 9600 bits per second. How long does it take to send 1200 bytes?",
          response: { type: "numeric", parts: [{ label: "Seconds", answer: 1 }] },
          markscheme: { principles: [{ kind: "formula", name: "Transfer time", statement: "$t=\\text{bits}/\\text{bps}$; $1\\text{ byte}=8\\text{ bits}$." }], steps: [
            { reasoning: "1200 bytes = $1200\\times8=9600$ bits.", working: "9600", marks: 1, markCode: "M" },
            { reasoning: "Time = $9600/9600=1$ s.", working: "1", marks: 1, markCode: "A" },
          ], finalAnswer: "1 s" },
        },
        {
          id: "olcs-u2-tm-q7", difficulty: "foundation", totalMarks: 1,
          stem: "A USB connection carries…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only video" },
            { id: "b", text: "Both data and power" },
            { id: "c", text: "Only power" },
            { id: "d", text: "Only data" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "USB", statement: "Carries data and power." }], steps: [{ reasoning: "USB supplies power to devices.", working: "\\text{data+power}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Data and power" },
        },
        {
          id: "olcs-u2-tm-q8", difficulty: "core", totalMarks: 2,
          stem: "An 8-bit parallel link runs at a clock frequency of 100 MHz. What is its maximum data rate in Mbps?",
          response: { type: "numeric", parts: [{ label: "Mbps", answer: 800 }] },
          markscheme: { principles: [{ kind: "formula", name: "Parallel rate", statement: "rate = bits per cycle × clock frequency." }], steps: [
            { reasoning: "$8\\times100\\text{ MHz}=800$ Mbit/s.", working: "800", marks: 1, markCode: "M" },
            { reasoning: "Correct rate in Mbps.", working: "800", marks: 1, markCode: "A" },
          ], finalAnswer: "800 Mbps" },
        },
        {
          id: "olcs-u2-tm-q9", difficulty: "core", totalMarks: 2,
          stem: "Give one reason serial transmission is preferred over parallel for long cables.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Serial range", statement: "One wire → less interference over distance." }], steps: [
            { reasoning: "Single wire avoids crosstalk/skew between wires.", working: "\\text{one wire}", marks: 1, markCode: "M" },
            { reasoning: "Reliable over longer distances.", marks: 1, markCode: "A" },
          ], finalAnswer: "Serial uses one wire, so there is no crosstalk or timing skew — reliable over long distances." },
        },
        {
          id: "olcs-u2-tm-q10", difficulty: "core", totalMarks: 1,
          stem: "Which device typically uses parallel transmission?",
          response: { type: "mcq", choices: [
            { id: "a", text: "An old printer cable inside a computer" },
            { id: "b", text: "A Bluetooth headset" },
            { id: "c", text: "A network cable" },
            { id: "d", text: "A USB flash drive" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Parallel use", statement: "Parallel suits short internal links." }], steps: [{ reasoning: "Parallel used for short-range internal connections.", working: "\\text{short range}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Old printer cable" },
        },
        {
          id: "olcs-u2-tm-q11", difficulty: "core", totalMarks: 2,
          stem: "A USB 2.0 link runs at 480 Mbps. What is the minimum time to transfer a 60 MB file?",
          response: { type: "numeric", parts: [{ label: "Seconds", answer: 1 }] },
          markscheme: { principles: [{ kind: "formula", name: "Transfer time", statement: "$t=\\text{Mb}/\\text{Mbps}$; $1\\text{ MB}=8\\text{ Mb}$." }], steps: [
            { reasoning: "60 MB = $480$ Mb.", working: "480", marks: 1, markCode: "M" },
            { reasoning: "Time = $480/480=1$ s.", working: "1", marks: 1, markCode: "A" },
          ], finalAnswer: "1 s" },
        },
        {
          id: "olcs-u2-tm-q12", difficulty: "core", totalMarks: 2,
          stem: "USB is described as 'hot-swappable'. This means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It needs no drivers" },
            { id: "b", text: "Devices can be connected and removed while powered" },
            { id: "c", text: "It works without a computer" },
            { id: "d", text: "It runs very hot" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Hot-swap", statement: "Connect/disconnect without powering off." }], steps: [{ reasoning: "Hot-swap = live connection.", working: "\\text{live}", marks: 1, markCode: "M" }, { reasoning: "No shutdown needed.", marks: 1, markCode: "A" }], finalAnswer: "**(b)** Connect/remove while powered" },
        },
        {
          id: "olcs-u2-tm-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Compare serial and parallel transmission for connecting devices in a typical home.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Comparison", statement: "Serial: long-range reliable; parallel: fast short-range." }], steps: [
            { reasoning: "Serial: one wire, cheap, works over long distances.", working: "\\text{long range}", marks: 1, markCode: "M" },
            { reasoning: "Serial suffers less interference.", working: "\\text{less noise}", marks: 1, markCode: "M" },
            { reasoning: "Parallel: faster but only over short distances.", working: "\\text{short range}", marks: 1, markCode: "M" },
            { reasoning: "Home devices (USB, network) use serial.", marks: 1, markCode: "A" },
          ], finalAnswer: "Serial is preferred for home devices — reliable over distance with less interference; parallel is only for short internal links." },
        },
        {
          id: "olcs-u2-tm-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Crosstalk is a problem mainly for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Parallel cables over long distances" },
            { id: "b", text: "Wireless signals" },
            { id: "c", text: "Single-wire serial links" },
            { id: "d", text: "USB connections" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Crosstalk", statement: "Adjacent parallel wires interfere." }], steps: [{ reasoning: "Parallel wires interfere with each other.", working: "\\text{crosstalk}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Parallel cables over distance" },
        },
        {
          id: "olcs-u2-tm-q15", difficulty: "challenge", totalMarks: 3,
          stem: "An 8-bit parallel interface runs at 50 MHz. Calculate its maximum data rate in Mbps, and the time to send 100 MB at that rate.",
          response: { type: "numeric", parts: [
            { label: "Mbps", answer: 400 },
            { label: "Seconds", answer: 2 },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "Rate & time", statement: "rate = bits/cycle × frequency; $t=\\text{Mb}/\\text{Mbps}$." }], steps: [
            { reasoning: "Rate = $8\\times50=400$ Mbps.", working: "400", marks: 1, markCode: "M" },
            { reasoning: "100 MB = 800 Mb.", working: "800", marks: 1, markCode: "M" },
            { reasoning: "Time = $800/400=2$ s.", working: "2", marks: 1, markCode: "A" },
          ], finalAnswer: "400 Mbps; 2 s" },
        },
        {
          id: "olcs-u2-tm-q16", difficulty: "foundation", totalMarks: 1,
          stem: "USB stands for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Universal Serial Bus" },
            { id: "b", text: "Unified System Board" },
            { id: "c", text: "Universal Signal Bridge" },
            { id: "d", text: "Ultra Speed Bandwidth" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "USB", statement: "Universal Serial Bus." }], steps: [{ reasoning: "USB = Universal Serial Bus.", working: "\\text{USB}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Universal Serial Bus" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u2-2-1-notes", title: "Packets and transmission — notes", summary: "Packet contents, packet switching, serial vs parallel, USB.",
      sections: [
        { heading: "Packets", body: "Data split into packets with address, sequence and error-check fields; reassembled at destination." },
        { heading: "Serial vs parallel", body: "Serial = one bit at a time, long-range (USB). Parallel = many bits at once, short-range only." },
      ] },
  ],
};
