import { Link } from "react-router-dom";
import {
  BiPhone,
  BiEnvelope,
  BiMap,
  BiTime,
} from "react-icons/bi";

function ContactCard({ icon, title, desc }) {
  return (
    <div className="rounded-3xl bg-white border border-secondary/10 p-6 shadow-sm hover:shadow-lg transition text-center">
      <div className="w-14 h-14 mx-auto rounded-2xl bg-primary flex items-center justify-center text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-secondary text-lg font-bold">{title}</h3>
      <p className="text-secondary/70 mt-2 text-sm">{desc}</p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-primary">
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-black">
            Contact New Tech Computers
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 leading-7">
            Get in touch with us for inquiries, support, or product guidance.
            We’re always ready to help you choose the right tech.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ContactCard
          icon={<BiPhone size={26} />}
          title="Phone"
          desc="0473388995"
        />
        <ContactCard
          icon={<BiEnvelope size={26} />}
          title="Email"
          desc="NewTech@gmail.com"
        />
        <ContactCard
          icon={<BiMap size={26} />}
          title="Location"
          desc="Matara, Sri Lanka"
        />
        <ContactCard
          icon={<BiTime size={26} />}
          title="Working Hours"
          desc="Mon - Sat: 9AM - 7PM"
        />
      </section>

      {/* Info Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Left */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-black text-secondary">
              Visit or Contact Us
            </h2>

            <p className="mt-4 text-secondary/70 leading-7">
              At NewTech Computers, we are committed to providing high-quality
              laptops, desktops, and accessories with reliable support. Whether
              you're upgrading your setup or looking for expert advice, feel
              free to reach out to us anytime.
            </p>

            <p className="mt-4 text-secondary/70 leading-7">
              You can contact us directly via phone or email, or visit our
              location in Matara. We’re happy to assist you with product
              selection, troubleshooting, and recommendations.
            </p>

            <div className="mt-6">
              <Link
                to="/products"
                className="inline-flex h-[50px] px-6 rounded-xl bg-secondary text-white font-bold items-center justify-center hover:bg-accent transition"
              >
                Browse Products
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl bg-gradient-to-br from-secondary to-accent text-white p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-black">
              Need Help Choosing?
            </h2>
            <p className="mt-4 text-white/80 leading-7">
              Not sure which laptop, PC, or component is right for you? Contact
              us directly and we’ll guide you based on your needs, budget, and
              usage.
            </p>

            <div className="mt-8 space-y-3">
              <p className="font-semibold">📞 Call: 0473388995</p>
              <p className="font-semibold">📧 Email: NewTech@gmail.com</p>
            </div>

            <div className="mt-6">
              <Link
                to="/about"
                className="inline-flex h-[50px] px-6 rounded-xl bg-white text-secondary font-bold items-center justify-center hover:bg-primary transition"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}