import Link from "next/link";
import { Twitter, Send, Github } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t py-8 text-sm text-muted-foreground">
      <div className="container mx-auto px-4 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>© {new Date().getFullYear()} Plunder Academy. All rights reserved.</div>
        
        <div className="flex items-center gap-4">
          <Link 
            href="https://x.com/PlunderAcademy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="Follow us on X (Twitter)"
          >
            <Twitter className="h-4 w-4" />
          </Link>
          <Link 
            href="https://t.me/PlunderAcademy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="Join our Telegram channel"
          >
            <Send className="h-4 w-4" />
          </Link>
          <Link 
            href="https://github.com/PlunderAcademy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="View our GitHub organization"
          >
            <Github className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
          <Link href="/terms" className="hover:text-foreground">Terms</Link>
        </div>
      </div>
    </footer>
  );
}