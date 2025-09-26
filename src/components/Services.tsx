import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      duration: "2-4 semaines",
      title: "Audit de Marché International",
      description: "Analyse complète de vos opportunités sur les marchés nordiques et internationaux",
      features: [
        "Étude de faisabilité culturelle",
        "Analyse concurrentielle approfondie",
        "Recommandations stratégiques",
        "Plan d'action personnalisé"
      ],
      idealFor: "Entreprises souhaitant s'implanter à l'international",
      highlight: false
    },
    {
      duration: "3-6 mois",
      title: "Stratégie d'Expansion Nordique",
      description: "Accompagnement complet pour votre développement sur les marchés scandinaves",
      features: [
        "Stratégie d'entrée sur mesure",
        "Identification de partenaires locaux",
        "Adaptation produit/service",
        "Formation équipes commerciales"
      ],
      idealFor: "PME et grandes entreprises en expansion",
      highlight: true
    },
    {
      duration: "1-3 mois",
      title: "Conseil en Communication Globale",
      description: "Optimisation de votre communication pour les marchés internationaux",
      features: [
        "Adaptation culturelle des messages",
        "Stratégie de contenu multimarché",
        "Guidelines de communication",
        "Formation à la négociation interculturelle"
      ],
      idealFor: "Équipes marketing et commerciales",
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Mes Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comment je peux vous accompagner
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-4xl mx-auto">
            Des solutions sur mesure pour transformer votre vision internationale en succès commercial, avec l'expertise culturelle comme différenciateur clé.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                service.highlight ? 'ring-2 ring-primary/20 scale-105' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <Badge variant="secondary" className="text-sm">
                    {service.duration}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-medium mb-2">Idéal pour :</p>
                  <p className="text-sm text-muted-foreground mb-4">{service.idealFor}</p>
                  <Button 
                    variant={service.highlight ? "default" : "outline"}
                    className="w-full"
                  >
                    En savoir plus
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Discutons de votre projet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;