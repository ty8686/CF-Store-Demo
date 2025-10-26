import { Link } from "react-router-dom";
import { ShieldCheck, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
const selectTotalItems = (state: { items: { quantity: number }[] }) =>
  state.items.reduce((total, item) => total + item.quantity, 0);
export function Header() {
  const totalItems = useCartStore(selectTotalItems);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl font-display tracking-tight">EdgeStore</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground">Solutions</Link>
            </nav>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart" aria-label="Shopping Cart">
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {totalItems}
                    </span>
                  )}
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}