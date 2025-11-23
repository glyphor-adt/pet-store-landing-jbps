import React from "react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"; // Assuming you have a Navbar component

interface ApplicationLayoutProps {
  children?: React.ReactNode; // Optional children for more flexibility
}

const ApplicationLayout: React.FC<ApplicationLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar /> {/* Render the Navbar here */}
        <main className="flex-1">
          <Hero />
          <Features />
          <Testimonials />
          {children} {/* Render any additional content passed as children */}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ApplicationLayout;