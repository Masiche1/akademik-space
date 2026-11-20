import { BookText } from "lucide-react";
import type { TextExtract } from "@/content/types.ts";

/** A reading passage, poem or play extract, printed like an exam insert. */
export default function ExtractPanel({ extract }: { extract: TextExtract }) {
  // Line numbers run continuously across stanzas.
  const stanzas = extract.text.split(/\n\s*\n/).map((s) => s.split("\n"));
  const starts = stanzas.map((_, i) => stanzas.slice(0, i).reduce((n, s) => n + s.length, 0));
  return (
    <figure className="rounded-xl border bg-background/70 p-4 sm:p-5">
      <figcaption className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 border-b pb-3">
        <BookText className="size-4 shrink-0 self-center text-chart-1" />
        <span className="font-serif text-lg font-semibold">{extract.title}</span>
        <span className="text-sm text-muted-foreground">{extract.author}</span>
        {extract.source && <span className="w-full text-xs text-muted-foreground sm:w-auto">{extract.source}</span>}
      </figcaption>
      <div className="max-h-[28rem] space-y-4 overflow-y-auto pt-4 font-serif text-[16px] leading-relaxed">
        {stanzas.map((stanza, si) => (
          <div key={si}>
            {stanza.map((text, li) => {
              const line = starts[si] + li + 1;
              const showNumber = extract.lineNumbers && (line === 1 || line % 5 === 0);
              return extract.lineNumbers ? (
                <div key={li} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-2">
                  <span className="select-none pt-0.5 text-right font-mono text-[11px] text-muted-foreground">{showNumber ? line : ""}</span>
                  <span>{text}</span>
                </div>
              ) : (
                <p key={li}>{text}</p>
              );
            })}
          </div>
        ))}
      </div>
    </figure>
  );
}
