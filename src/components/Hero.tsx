import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import thierryHero from "@/assets/thierry-hero.jpg";

const Hero = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Marketing{" "}
                <span className="text-primary">International</span> &{" "}
                <br />
                Stratégie Culturelle
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Expert en développement commercial international avec une spécialisation unique dans les cultures nordiques. Je transforme votre compréhension culturelle en avantage concurrentiel.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Expertise Nordique
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                Développement International
              </Badge>
            </div>
            
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Découvrir mes services
              </Button>
              <Button size="lg" variant="outline">
                Voir mon parcours
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Marchés analysés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Projets réalisés</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src={thierryHero} 
                alt="Thierry Robert - Expert Marketing International"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <div className="bg-primary/90 backdrop-blur-sm rounded-xl p-4 text-primary-foreground">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">Croissance</span>
                  </div>
                  <div className="text-sm opacity-90">Internationale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;