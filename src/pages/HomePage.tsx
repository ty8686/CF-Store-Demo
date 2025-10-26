import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Filter, X } from "lucide-react";
import { products as allProducts } from "@shared/mock-data";
import { ProductCard } from "@/components/ProductCard";
import { FilterSidebar, Filters } from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
const INITIAL_FILTERS: Filters = {
  category: "All",
};
export function HomePage() {
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);
  const isMobile = useIsMobile();
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      if (filters.category === "All") {
        return true;
      }
      return product.categories.includes(filters.category as any);
    });
  }, [filters]);
  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };
  const resetFilters = () => {
    setFilters(INITIAL_FILTERS);
  };
  const activeFilterCount = filters.category !== "All" ? 1 : 0;
  const renderFilterSidebar = () => (
    <FilterSidebar
      filters={filters}
      onFilterChange={handleFilterChange}
      onReset={resetFilters}
    />
  );
  return (
    <>
      <section className="bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24 lg:py-32 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold font-display tracking-tight text-balance"
            >
              The Marketplace for Modern Infrastructure
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground"
            >
              Discover, evaluate, and procure Cloudflare's cutting-edge security and performance solutions with the simplicity of an e-commerce experience.
            </motion.p>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            <div className="hidden lg:block">
              {renderFilterSidebar()}
            </div>
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">
                  {filters.category === "All" ? "All Solutions" : filters.category} ({filteredProducts.length})
                </h2>
                {isMobile && (
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" />
                        Filters
                        {activeFilterCount > 0 && (
                          <span className="ml-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">{activeFilterCount}</span>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Filter Products</SheetTitle>
                      </SheetHeader>
                      <div className="py-4">
                        {renderFilterSidebar()}
                      </div>
                    </SheetContent>
                  </Sheet>
                )}
              </div>
              {activeFilterCount > 0 && !isMobile && (
                <div className="flex items-center gap-2 mb-4 p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium">Active Filter:</span>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{filters.category}</Badge>
                  </div>
                  <Button variant="ghost" size="sm" onClick={resetFilters} className="ml-auto">
                    <X className="w-4 h-4 mr-1" /> Clear filter
                  </Button>
                </div>
              )}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 border-2 border-dashed rounded-lg">
                  <h3 className="text-xl font-semibold">No Products Found</h3>
                  <p className="text-muted-foreground mt-2">Try adjusting your filters.</p>
                  <Button onClick={resetFilters} className="mt-4">Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}