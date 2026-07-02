import PageHero from "../components/common/PageHero";

const News = () => {
  const news = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <PageHero
        title="News & Events"
        subtitle="Stay informed about our latest activities and community programs."
        image="https://images.unsplash.com/photo-1494172961521-33799ddd43a5?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {news.map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl shadow-sm overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
                  alt=""
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#0B2C6B]">
                    Community Outreach Program
                  </h3>

                  <p className="mt-3 text-gray-600">
                    Empowering communities through sustainable initiatives.
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
};

export default News;