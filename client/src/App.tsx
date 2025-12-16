import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import ProductDetail from "@/pages/ProductDetail";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { queryClient } from "./lib/queryClient";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products/:slug">
        {(params) => <ProductDetail slug={params.slug} />}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <LanguageSwitcher />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
