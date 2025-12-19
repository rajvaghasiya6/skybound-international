import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import NotFound from "@/pages/not-found";
import ProductDetail from "@/pages/ProductDetail";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { Route, Switch, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";

// Global store for scroll positions - works for ALL routes
const scrollPositions = new Map<string, number>();

function ScrollManager() {
  const [location] = useLocation();
  const prevLocation = useRef<string>(location);
  const isRestoringScroll = useRef(false);

  // Handle route changes - save old position and restore/reset new position
  useEffect(() => {
    const previousPath = prevLocation.current;
    const currentPath = location;

    // Save scroll position of the route we're leaving
    if (previousPath && previousPath !== currentPath) {
      scrollPositions.set(previousPath, window.scrollY);
      console.log(`Saved scroll position for ${previousPath}: ${window.scrollY}px`);
    }

    // Restore or reset scroll for the new route
    const handleScroll = () => {
      isRestoringScroll.current = true;

      if (scrollPositions.has(currentPath)) {
        // We've been to this route before - restore saved position
        const savedPosition = scrollPositions.get(currentPath) || 0;
        window.scrollTo(0, savedPosition);
        console.log(`Restored scroll position for ${currentPath}: ${savedPosition}px`);
      } else {
        // First visit to this route - start at top
        window.scrollTo(0, 0);
        console.log(`New route ${currentPath}: scrolled to top`);
      }

      setTimeout(() => {
        isRestoringScroll.current = false;
      }, 100);
    };

    // Delay to ensure content is fully rendered
    const timeoutId = setTimeout(handleScroll, 10);

    // Update previous location reference
    prevLocation.current = currentPath;

    return () => clearTimeout(timeoutId);
  }, [location]);

  // Continuously save scroll position while scrolling on current route
  useEffect(() => {
    const handleScrollSave = () => {
      if (!isRestoringScroll.current) {
        scrollPositions.set(location, window.scrollY);
      }
    };

    // Throttle scroll events for performance
    let timeoutId: NodeJS.Timeout;
    const throttledScrollSave = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScrollSave, 100);
    };

    window.addEventListener('scroll', throttledScrollSave, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScrollSave);
      clearTimeout(timeoutId);
    };
  }, [location]);

  // Save scroll position before page unload/refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      scrollPositions.set(location, window.scrollY);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollManager />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/products/:slug">
          {(params) => <ProductDetail slug={params.slug} />}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <WhatsAppFloat />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;