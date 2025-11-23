import React from 'react';
import { Grid, GridItem } from "@/components/ui/grid"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconType } from 'lucide-react';
import { CheckCircle, Heart, Star, ShieldCheck, Truck } from 'lucide-react';
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: IconType;
}

const features: Feature[] = [
  {
    title: 'High-Quality Pet Food',
    description: 'We offer a curated selection of nutritious and delicious food for all types of pets.',
    icon: CheckCircle,
  },
  {
    title: 'Expert Grooming Services',
    description: 'Pamper your furry friend with our professional grooming services. Experienced groomers ensure a happy and healthy pet.',
    icon: Heart,
  },
  {
    title: 'Wide Selection of Toys',
    description: 'Keep your pet entertained with our vast collection of toys, from plushies to interactive puzzles.',
    icon: Star,
  },
  {
    title: 'Health & Wellness Products',
    description: 'We provide premium supplements, vitamins, and health products to support your pet\'s well-being.',
    icon: ShieldCheck,
  },
    {
    title: 'Fast and Reliable Delivery',
    description: 'Get your pet supplies delivered right to your door with our convenient and speedy delivery service.',
    icon: Truck,
  },
  {
    title: 'Expert Advice',
    description: 'Our friendly and knowledgeable staff is always here to help with your pet related queries.',
    icon: CheckCircle,
  },
];

interface FeaturesSectionProps {
  className?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className }) => {
  return (
    <section className={cn("py-12 bg-neutral-50 dark:bg-neutral-900", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-neutral-900 dark:text-neutral-100">Why Choose Us?</h2>
        <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <GridItem key={index}>
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="w-6 h-6 text-primary mb-2" />
                  <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default FeaturesSection;