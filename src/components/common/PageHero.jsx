import { motion } from "framer-motion";

const PageHero = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <section className="relative h-[500px] overflow-hidden">

      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#0B2C6B]/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {title}
          </h1>

          <p className="mt-5 text-xl text-gray-200 max-w-2xl">
            {subtitle}
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default PageHero;