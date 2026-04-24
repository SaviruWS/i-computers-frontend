import { Link } from "react-router-dom";
import ProductPage from "./productPage";
import {
  BiLaptop,
  BiChip,
  BiSupport,
  BiShieldQuarter,
} from "react-icons/bi";

function InfoCard({ icon, title, desc }) {
  return (
    <div className="rounded-3xl bg-white border border-secondary/10 p-6 shadow-sm hover:shadow-lg transition">
      <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-secondary text-lg font-bold">{title}</h3>
      <p className="text-secondary/70 mt-2 text-sm leading-6">{desc}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-black">
            About New Tech Computers
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 leading-7">
            Your trusted destination for high-quality computers, accessories,
            and tech solutions. Built with passion and driven by innovation.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-black text-secondary">
            Who We Are
          </h2>
          <p className="mt-6 text-secondary/70 leading-8">
            NewTech Computers is a growing technology store founded by Saviru
            Bambarenda with the vision of delivering reliable and affordable
            computing solutions. We focus on providing laptops, desktop
            computers, components, and accessories that match modern user needs,
            whether for education, business, or gaming.
          </p>

          <p className="mt-4 text-secondary/70 leading-8">
            Our goal is not just selling products, but helping customers make the
            right decisions. We believe in quality, transparency, and building
            long-term trust with every customer who chooses us.
          </p>

          <div className="mt-8">
            <Link
              to="/products"
              className="inline-flex h-[50px] px-6 rounded-xl bg-secondary text-white font-bold items-center justify-center hover:bg-accent transition"
            >
              Explore Products
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Our Mission
          </h3>
          <p className="text-secondary/70 leading-7">
            To provide high-quality technology products at competitive prices
            while ensuring excellent customer service and support. We aim to make
            modern technology accessible to everyone.
          </p>

          <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">
            Our Vision
          </h3>
          <p className="text-secondary/70 leading-7">
            To become one of the most trusted computer stores in Sri Lanka by
            continuously improving our services, expanding our product range, and
            building strong customer relationships.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-secondary">
            Why Choose Us
          </h2>
          <p className="text-secondary/70 mt-4">
            We focus on quality, service, and customer satisfaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard
            icon={<BiLaptop size={28} />}
            title="Latest Technology"
            desc="We provide modern laptops and computers suitable for all needs."
          />
          <InfoCard
            icon={<BiChip size={28} />}
            title="Quality Components"
            desc="Only trusted and reliable parts for better performance."
          />
          <InfoCard
            icon={<BiShieldQuarter size={28} />}
            title="Trusted Service"
            desc="We ensure genuine products and customer satisfaction."
          />
          <InfoCard
            icon={<BiSupport size={28} />}
            title="Customer Support"
            desc="Friendly support to guide you in choosing the right product."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-white py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black">
            Ready to explore our products?
          </h2>
          <p className="mt-4 text-white/80">
            Browse our collection and find the perfect device for your needs.
          </p>

          <div className="mt-6">
            <Link
              to="/products"
              className="inline-flex h-[52px] px-8 rounded-2xl bg-accent text-white font-bold items-center justify-center hover:bg-white hover:text-secondary transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}