import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quote, Linkedin, Play } from "lucide-react";
import globalMarket from "@/assets/global-market.jpg";

const About = () => {
  const values = ["Stratégie", "Culture", "Innovation", "Résultats", "Partenariat"];
  
  const stats = [
    { number: "25+", label: "Marchés étudiés", description: "Analyses approfondies des marchés nordiques et internationaux" },
    { number: "100+", label: "Projets menés", description: "Accompagnements réussis d'entreprises vers l'international" },
    { number: "15+", label: "Années d'expertise", description: "Développement continu de l'expertise culturelle nordique" },
    { number: "50+", label: "Entreprises conseillées", description: "De la startup à la multinationale" }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">À Propos</h2>
          <p className="text-xl text-muted-foreground">
            Un parcours dédié au marketing international
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Mon approche unique</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fort de plus de 15 années d'expérience en développement commercial international, j'ai développé une expertise unique dans la compréhension des cultures nordiques et leur application au business global.
                </p>
                <p>
                  Cette spécialisation me permet d'identifier rapidement les opportunités commerciales et de vous faire économiser un temps précieux dans vos projets d'expansion internationale.
                </p>
                <p>
                  Ma pratique des cultures nordiques et de la communication globale constitue la base de ce que je peux vous offrir : une analyse culturelle qui se transforme en avantage concurrentiel.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <Badge key={value} variant="secondary" className="px-4 py-2">
                    {value}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Mes Vidéos
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={globalMarket} 
              alt="Vision globale des marchés internationaux"
              className="w-full h-[500px] object-cover rounded-3xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="text-4xl font-bold text-primary">{stat.number}</div>
              <div className="font-semibold">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-secondary/20 rounded-3xl p-8 md:p-12 text-center">
          <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl leading-relaxed text-muted-foreground mb-6 max-w-4xl mx-auto">
            "Dans un monde de plus en plus connecté, la compréhension culturelle devient le facteur différenciant pour réussir à l'international. Mon objectif est de transformer cette expertise en avantage concurrentiel durable pour vos projets."
          </blockquote>
          <cite className="text-lg font-semibold">— Thierry Robert</cite>
        </div>
      </div>
    </section>
  );
};

export default About;