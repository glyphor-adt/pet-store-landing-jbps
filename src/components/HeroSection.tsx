import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground mb-4">
              Your Pet's Happy Place Starts Here
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover a wide selection of high-quality pet supplies, nutritious food, and adorable accessories to keep your furry friends healthy and happy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="/hero-image.jpg" // Replace with your actual image path
              alt="Pets and their owners"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
              priority
              style={{ maxHeight: '500px' }}
            />
            {/* Overlay with a heart icon */}
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-tr from-primary/50 to-accent/50 opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
              <Heart className="text-white h-16 w-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;