import { useState, type KeyboardEvent } from "react";
import { Delete } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { evaluate, formatResult, type AngleMode } from "@/lib/calculator.ts";
import { cn } from "@/lib/utils.ts";

type Key = { label: string; insert?: string; action?: "clear" | "back" | "equals"; wide?: boolean };

const KEYS: Key[] = [
  { label: "sin", insert: "sin(" }, { label: "cos", insert: "cos(" }, { label: "tan", insert: "tan(" }, { label: "(", insert: "(" }, { label: ")", insert: ")" },
  { label: "sin\u207b\u00b9", insert: "asin(" }, { label: "cos\u207b\u00b9", insert: "acos(" }, { label: "tan\u207b\u00b9", insert: "atan(" }, { label: "x\u00b2", insert: "^2" }, { label: "x\u02b8", insert: "^" },
  { label: "\u221a", insert: "sqrt(" }, { label: "ln", insert: "ln(" }, { label: "log", insert: "log(" }, { label: "\u03c0", insert: "\u03c0" }, { label: "e", insert: "e" },
  { label: "7", insert: "7" }, { label: "8", insert: "8" }, { label: "9", insert: "9" }, { label: "\u00f7", insert: "\u00f7" }, { label: "AC", action: "clear" },
  { label: "4", insert: "4" }, { label: "5", insert: "5" }, { label: "6", insert: "6" }, { label: "\u00d7", insert: "\u00d7" }, { label: "\u232b", action: "back" },
  { label: "1", insert: "1" }, { label: "2", insert: "2" }, { label: "3", insert: "3" }, { label: "\u2212", insert: "-" }, { label: "n!", insert: "!" },
  { label: "0", insert: "0" }, { label: ".", insert: "." }, { label: "Ans", insert: "ans" }, { label: "+", insert: "+" }, { label: "=", action: "equals" },
];

type Entry = { expr: string; result: string };

/** Scientific calculator with degree/radian mode and a short history. */
export default function CalculatorPanel() {
  const [expr, setExpr] = useState("");
  const [mode, setMode] = useState<AngleMode>("deg");
  const [ans, setAns] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<Entry[]>([]);

  const run = () => {
    if (!expr.trim()) return;
    try {
      const value = evaluate(expr, mode, ans);
      const result = formatResult(value);
      setHistory((h) => [{ expr, result }, ...h].slice(0, 4));
      setAns(value);
      setExpr("");
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid expression");
    }
  };

  const press = (k: Key) => {
    setError(null);
    if (k.action === "clear") setExpr("");
    else if (k.action === "back") setExpr((s) => s.slice(0, -1));
    else if (k.action === "equals") run();
    else setExpr((s) => s + (k.insert ?? ""));
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { e.preventDefault(); run(); }
  };

  return (
    <div className="w-[300px] space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Scientific calculator</p>
        <div className="flex rounded-md bg-muted p-0.5 text-xs">
          {(["deg", "rad"] as const).map((m) => (
            <button key={m} type="button" onClick={() => setMode(m)}
              className={cn("rounded px-2 py-0.5 font-mono uppercase cursor-pointer", mode === m ? "bg-background shadow-sm" : "text-muted-foreground")}>
              {m}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-1 rounded-lg bg-muted/60 p-2">
        <div className="min-h-[3.25rem] space-y-0.5 text-right font-mono text-xs text-muted-foreground">
          {history.slice(0, 2).reverse().map((h, i) => (
            <button key={i} type="button" className="block w-full truncate text-right hover:text-foreground cursor-pointer"
              onClick={() => setExpr((s) => s + h.result)} title="Insert result">
              {h.expr} = <span className="text-foreground">{h.result}</span>
            </button>
          ))}
        </div>
        <Input value={expr} onChange={(e) => { setExpr(e.target.value); setError(null); }} onKeyDown={onKeyDown}
          placeholder="e.g. 12sin(35)" aria-label="Calculator expression"
          className="h-10 bg-background text-right font-mono text-base" />
        <p className={cn("h-4 text-right text-[11px]", error ? "text-destructive" : "text-muted-foreground")}>
          {error ?? `Ans = ${formatResult(ans)}`}
        </p>
      </div>
      <div className="grid grid-cols-5 gap-1">
        {KEYS.map((k) => (
          <Button key={k.label} type="button" size="sm" onClick={() => press(k)}
            variant={k.action === "equals" ? "default" : /^[0-9.]$/.test(k.label) ? "secondary" : "ghost"}
            className={cn("h-9 px-0 font-mono text-xs", !/^[0-9.]$/.test(k.label) && k.action !== "equals" && "bg-muted/60")}
            aria-label={k.action === "back" ? "Backspace" : k.label}>
            {k.action === "back" ? <Delete className="size-4" /> : k.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
