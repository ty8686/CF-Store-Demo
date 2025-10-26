import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Mail, ArrowLeft } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { products as allProducts } from "@shared/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CartItem } from "@/components/CartItem";
export function CartPage() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const cartDetails = useMemo(() => {
    return items
      .map((item) => {
        const product = allProducts.find((p) => p.id === item.productId);
        return product ? { ...product, quantity: item.quantity } : null;
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);
  }, [items]);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const mailtoHref = useMemo(() => {
    const subject = "EdgeStore Solution Inquiry";
    const body = `Hello Cloudflare Account Team,\n\nI am interested in the following solutions from the EdgeStore:\n\n${cartDetails
      .map((item) => `- ${item.name} (Quantity: ${item.quantity})`)
      .join("\n")}\n\nPlease provide me with more information.\n\nThank you,`;
    return `mailto:theatwole@cloudflare.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [cartDetails]);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Solutions
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight">Your Solution Cart</h1>
        </motion.div>
        <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{totalItems} {totalItems === 1 ? 'Item' : 'Items'}</span>
                {totalItems > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearCart}>
                    Clear Cart
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {cartDetails.length > 0 ? (
                <div>
                  <AnimatePresence>
                    {cartDetails.map((item) => (
                      <CartItem key={item.id} product={item} quantity={item.quantity} />
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="text-center py-16 px-6">
                  <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-xl font-semibold">Your cart is empty</h3>
                  <p className="mt-2 text-muted-foreground">Browse our solutions to get started.</p>
                  <Button asChild className="mt-6">
                    <Link to="/">Explore Solutions</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          <aside className="lg:col-span-1 sticky top-24">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Ready to discuss your selected solutions? Contact your Cloudflare Account Team to get started. We'll help you tailor these products to your specific needs.
                </p>
                <Button
                  asChild
                  className="w-full btn-gradient"
                  disabled={cartDetails.length === 0}
                >
                  <a href={mailtoHref}>
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Account Team
                  </a>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}