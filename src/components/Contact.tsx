import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discutons de votre projet international
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-4xl mx-auto">
            Que vous souhaitiez explorer les marchés nordiques ou développer votre stratégie internationale, je serais ravi d'échanger avec vous.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8">Prenons contact</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-medium">thierry@thierry-robert.eu</p>
                    <p className="text-sm text-muted-foreground">Réponse sous 24h</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">LinkedIn</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-medium">Thierry Robert</p>
                    <p className="text-sm text-muted-foreground">Stratégie Marketing Internationale</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Localisation</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-medium">Europe / Nordique</p>
                    <p className="text-sm text-muted-foreground">Interventions sur site possibles</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Consultation gratuite</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      30 minutes pour discuter de vos enjeux internationaux et voir comment mon expertise peut vous aider.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Réserver un créneau
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez-moi un message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom *</Label>
                    <Input id="name" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Entreprise</Label>
                  <Input id="company" placeholder="Nom de votre entreprise" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet *</Label>
                  <Input id="subject" placeholder="Objet de votre message" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    rows={5}
                    placeholder="Décrivez votre projet ou vos besoins..."
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    Envoyer le message
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Programmer un appel
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  * Champs obligatoires. Vos données sont traitées de manière confidentielle et ne seront pas partagées avec des tiers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;