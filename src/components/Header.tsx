import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-6 px-6 bg-background border-b border-border/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Globe className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold text-foreground">Thierry Robert</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#expertise" className="text-muted-foreground hover:text-foreground transition-colors">
            Expertise
          </a>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            À propos
          </a>
          <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
        
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Contact
        </Button>
      </div>
    </header>
  );
};

export default Header;