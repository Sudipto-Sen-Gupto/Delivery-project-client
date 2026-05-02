import React from "react";

const servicesData = [
  {
    id: 1,
    title: "Same Day Delivery",
    description:
      "Fast and reliable same-day delivery service within the city for urgent parcels.",
    icon: "🚚",
  },
  {
    id: 2,
    title: "Next Day Delivery",
    description:
      "Affordable next-day delivery service across the country with real-time tracking.",
    icon: "📦",
  },
  {
    id: 3,
    title: "Cash on Delivery",
    description:
      "Secure payment collection service for e-commerce businesses.",
    icon: "💰",
  },
  {
    id: 4,
    title: "International Shipping",
    description:
      "Send parcels worldwide with trusted logistics partners.",
    icon: "🌍",
  },
  {
    id: 5,
    title: "Warehouse Service",
    description:
      "Store and manage your products safely with our smart warehouse system.",
    icon: "🏢",
  },
  {
    id: 6,
    title: "Live Tracking",
    description:
      "Track your parcel in real-time from pickup to delivery.",
    icon: "📍",
  },
];

const processSteps = [
  { step: "01", title: "Book Order", desc: "Create a delivery request easily." },
  { step: "02", title: "Pickup Parcel", desc: "Our agent collects your parcel." },
  { step: "03", title: "In Transit", desc: "Parcel moves safely to destination." },
  { step: "04", title: "Delivered", desc: "Parcel delivered to the receiver." },
];

const Service = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We provide fast, secure, and reliable parcel delivery solutions tailored for individuals and businesses.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Offer
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {processSteps.map((item, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Send Your Parcel?
        </h2>
        <p className="mb-6">
          Book your delivery now and experience fast & reliable service.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

    </div>
  );
};

export default Service;