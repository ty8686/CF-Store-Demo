import { ShieldCheck } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-display">EdgeStore</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ at Cloudflare
          </p>
        </div>
      </div>
    </footer>
  );
}