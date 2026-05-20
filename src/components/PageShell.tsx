import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type PageShellProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

const PageShell = ({ title, subtitle, children }: PageShellProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Geo Orbix Technologies
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-4">
              {title}
            </h1>
            {subtitle ? (
              <p className="text-muted-foreground text-lg">{subtitle}</p>
            ) : null}
          </div>
          {children ? <div className="mt-10">{children}</div> : null}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PageShell;
