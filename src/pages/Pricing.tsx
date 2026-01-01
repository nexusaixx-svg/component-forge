import { Check, X, Sparkles, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import voxsLogo from "@/assets/voxs-logo.png";

interface PlanFeature {
  name: string;
  free: boolean | string;
  pro: boolean | string;
  expert: boolean | string;
  enterprise: boolean | string;
}

const features: PlanFeature[] = [
  { name: "VOX v-3.5 Access", free: true, pro: true, expert: true, enterprise: true },
  { name: "VOX v-4 Access", free: "Limited", pro: true, expert: true, enterprise: true },
  { name: "VOX v-4 MINI", free: true, pro: true, expert: true, enterprise: true },
  { name: "VOX v-4.5 Access", free: false, pro: true, expert: true, enterprise: true },
  { name: "VOX v-4 PRO Access", free: false, pro: false, expert: true, enterprise: true },
  { name: "VOX v-4.5 MINI", free: false, pro: true, expert: true, enterprise: true },
  { name: "VOX Brain Intelligence", free: "Basic", pro: "Advanced", expert: "Full", enterprise: "Custom" },
  { name: "Live Personal Context", free: false, pro: true, expert: true, enterprise: true },
  { name: "Smart Recommendations", free: "Basic", pro: "Advanced", expert: "Full", enterprise: "Custom" },
  { name: "Privacy Dashboard", free: true, pro: true, expert: true, enterprise: true },
  { name: "Chat History", free: "7 days", pro: "Unlimited", expert: "Unlimited", enterprise: "Unlimited" },
  { name: "File Uploads", free: "5/day", pro: "50/day", expert: "Unlimited", enterprise: "Unlimited" },
  { name: "Priority Support", free: false, pro: false, expert: true, enterprise: true },
  { name: "API Access", free: false, pro: false, expert: true, enterprise: true },
  { name: "Custom Integrations", free: false, pro: false, expert: false, enterprise: true },
  { name: "Dedicated Account Manager", free: false, pro: false, expert: false, enterprise: true },
  { name: "SLA Guarantee", free: false, pro: false, expert: false, enterprise: true },
  { name: "On-Premise Deployment", free: false, pro: false, expert: false, enterprise: true },
];

const FeatureCell = ({ value }: { value: boolean | string }) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-green-500 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
    );
  }
  return <span className="text-sm text-foreground">{value}</span>;
};

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={voxsLogo} alt="VOXS" className="w-8 h-8 object-contain" />
            <span className="font-semibold text-lg">VOXS</span>
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Chat
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
            Choose Your Plan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlock the full power of VOX AI. From personal use to enterprise solutions.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Save 15% with yearly billing
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Free */}
          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-foreground mb-2">Free</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-foreground">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Get started with basic AI assistance for personal use.
            </p>
            <button className="w-full py-2.5 rounded-xl border border-border hover:bg-secondary transition-colors text-foreground font-medium">
              Get Started
            </button>
          </div>

          {/* PRO */}
          <div className="bg-card border-2 border-primary rounded-2xl p-6 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">PRO Tier</h3>
            <div className="mb-1">
              <span className="text-3xl font-bold text-foreground">$19</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              or <span className="text-primary font-medium">$190/year</span> (save 15%)
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Enhanced capabilities for professionals and creators.
            </p>
            <button className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
              Upgrade to PRO
            </button>
          </div>

          {/* Expert */}
          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Expert Tier</h3>
            </div>
            <div className="mb-1">
              <span className="text-3xl font-bold text-foreground">$59</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              or <span className="text-primary font-medium">$599/year</span> (save 15%)
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Full access with API and priority support for teams.
            </p>
            <button className="w-full py-2.5 rounded-xl border border-primary text-primary hover:bg-primary/10 transition-colors font-medium">
              Go Expert
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Enterprise</h3>
            </div>
            <div className="mb-1">
              <span className="text-2xl font-bold text-foreground">Custom</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Starting at <span className="text-primary font-medium">$2,000/month</span>
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Tailored solutions with dedicated support and SLA.
            </p>
            <button className="w-full py-2.5 rounded-xl border border-border hover:bg-secondary transition-colors text-foreground font-medium">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-serif font-bold text-foreground">
              Feature Comparison
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Feature</th>
                  <th className="text-center p-4 text-sm font-semibold text-foreground w-[120px]">Free</th>
                  <th className="text-center p-4 text-sm font-semibold text-primary w-[120px]">PRO</th>
                  <th className="text-center p-4 text-sm font-semibold text-foreground w-[120px]">Expert</th>
                  <th className="text-center p-4 text-sm font-semibold text-foreground w-[120px]">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr
                    key={feature.name}
                    className={`border-b border-border last:border-0 ${
                      idx % 2 === 0 ? "bg-background" : "bg-secondary/10"
                    }`}
                  >
                    <td className="p-4 text-sm text-foreground">{feature.name}</td>
                    <td className="p-4 text-center">
                      <FeatureCell value={feature.free} />
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <FeatureCell value={feature.pro} />
                    </td>
                    <td className="p-4 text-center">
                      <FeatureCell value={feature.expert} />
                    </td>
                    <td className="p-4 text-center">
                      <FeatureCell value={feature.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need help choosing? Questions about Enterprise plans?
          </p>
          <button className="px-6 py-2.5 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors text-foreground font-medium">
            Contact Us
          </button>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
