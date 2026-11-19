import { ClipboardList, CreditCard, PackageSearch, Users } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: CreditCard,
      title: "POS Software",
      description:
        "Manage sales, transactions, and day-to-day checkout operations with an easy-to-use point-of-sale system.",
    },
    {
      icon: ClipboardList,
      title: "Procurement Software",
      description:
        "Organize purchase requests, approvals, suppliers, and procurement workflows in one place.",
    },
    {
      icon: PackageSearch,
      title: "Fixed Asset Register",
      description:
        "Keep asset records organized with clear tracking of ownership, location, and lifecycle details.",
    },
    {
      icon: Users,
      title: "Employee Management System",
      description:
        "Centralize employee records and simplify everyday staff and administration processes.",
    },
  ];

  return (
    <section id="products" className="py-20 md:py-32 relative bg-secondary/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
            Software for
            <span className="gradient-text block">Everyday Operations</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Purpose-built tools to help organizations manage sales, procurement,
            assets, and employees.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="group card-gradient rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 mb-5 group-hover:bg-primary/20 transition-colors">
                <product.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
