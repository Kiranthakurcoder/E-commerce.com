import { Truck, Gift, RefreshCcw, Store } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Store className="h-8 w-8 text-pink-500" />,
    title: "Pick up in store",
    desc: "Collect your order easily at our local store at your convenience.",
  },
  {
    icon: <Gift className="h-8 w-8 text-pink-500" />,
    title: "Special packaging",
    desc: "We offer beautifully wrapped packages perfect for gifting.",
  },
  {
    icon: <RefreshCcw className="h-8 w-8 text-pink-500" />,
    title: "Free global returns",
    desc: "Hassle-free returns from anywhere around the world.",
  },
  {
    icon: <Truck className="h-8 w-8 text-pink-500" />,
    title: "Book An Appointment",
    desc: "Schedule your personalized in-store experience easily.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-12 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#f1faee] border-pink-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-pink-400 transition-all duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
