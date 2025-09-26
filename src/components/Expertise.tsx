import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Globe, MessageSquare, Search, Users, BarChart3 } from "lucide-react";
import nordicExpertise from "@/assets/nordic-expertise.jpg";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Cultures Nordiques",
      description: "Compréhension approfondie des marchés scandinaves et finlandais, leurs habitudes de consommation et codes culturels.",
      skills: ["Analyse de marché", "Stratégie d'entrée", "Partenariats locaux", "Négociation"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Développement Commercial",
      description: "Stratégies d'expansion internationale adaptées aux spécificités culturelles de chaque marché.",
      skills: ["Analyse de marché", "Stratégie d'entrée", "Partenariats locaux", "Négociation"]
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Communication Globale",
      description: "Adaptation des messages marketing aux différentes cultures pour maximiser l'impact commercial.",
      skills: ["Marketing culturel", "Communication digitale", "Branding international", "Content strategy"]
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Analyse Opportunités",
      description: "Identification rapide et précise des opportunités commerciales grâce à la compréhension culturelle.",
      skills: ["Business intelligence", "Veille concurrentielle", "Études de faisabilité", "ROI analysis"]
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Conseil Stratégique",
      description: "Accompagnement dans la définition et mise en œuvre de stratégies internationales performantes.",
      skills: ["Strategic planning", "Change management", "Formation équipes", "Coaching"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Performance & Analytics",
      description: "Mesure et optimisation de la performance commerciale sur les marchés internationaux.",
      skills: ["KPI définition", "Data analysis", "Reporting", "Optimisation continue"]
    }
  ];

  const nordicValues = ["Transparence", "Durabilité", "Innovation", "Qualité", "Confiance"];
  const nordicCountries = [
    { flag: "🇸🇪", name: "Suède" },
    { flag: "🇳🇴", name: "Norvège" },
    { flag: "🇩🇰", name: "Danemark" },
    { flag: "🇫🇮", name: "Finlande" },
    { flag: "🇮🇸", name: "Islande" }
  ];

  return (
    <section id="expertise" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Mon Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Là où la compréhension culturelle fait la différence
          </p>
        </div>

        <div className="mb-16">
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
            Contrairement aux connaissances techniques, la maîtrise et la compréhension des cultures et de leurs environnements font toute la différence. Elles permettent une analyse rapide et précise des opportunités commerciales.
          </p>
          
          <div className="bg-secondary/50 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Pourquoi les cultures nordiques ?</h3>
                  <p className="text-muted-foreground mb-6">
                    Ma pratique approfondie des cultures nordiques et de la communication globale constitue la base de ce que je peux vous offrir. Ces marchés exigeants et sophistiqués sont souvent précurseurs de tendances mondiales.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    L'expertise nordique ouvre les portes vers une compréhension plus fine des marchés internationaux, où la confiance et la transparence sont des valeurs cardinales du business.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {nordicValues.map((value) => (
                      <Badge key={value} variant="secondary" className="px-3 py-1">
                        {value}
                      </Badge>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Cultures Nordiques</h4>
                    <div className="flex flex-wrap gap-4">
                      {nordicCountries.map((country) => (
                        <div key={country.name} className="flex items-center gap-2">
                          <span className="text-2xl">{country.flag}</span>
                          <span className="text-sm font-medium">{country.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={nordicExpertise} 
                  alt="Expertise marchés nordiques"
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6">{area.icon}</div>
                <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                <p className="text-muted-foreground mb-6">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;