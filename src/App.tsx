import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Aboutus from "./pages/Aboutus";
import Teams from "./pages/Teams";
import Faq from "./pages/Faq";
import Services from './pages/Services';
import Contact from './pages/Contact';
import Career from './pages/Career'
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/services" element={<Services />} />  
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/career" element={<Career />} />  
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
