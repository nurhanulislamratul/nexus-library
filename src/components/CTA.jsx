const CTA = () => {
  return (
    <div>
      <section className="bg-[url(https://i.ibb.co/9w3ML5B/cta.jpg)] bg-cover bg-no-repeat bg-center">
        <div className="w-full px-4 py-28 mt-20 lg:px-10 ">
          <h2 className="text-3xl md:text-5xl leading-10 mb-8 font-bold tracking-tight bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-600 dark:via-indigo-500 dark:to-orange-400 ">
            Get 25% off on your next service purchase
          </h2>

          <p className="text-lg sm:text-xl max-w-2xl mt-4 text-slate-800 dark:text-gray-300">
            Browse our list of services and select the repair you need. Book
            your appointment online and mention the promotion code during
            checkout.
          </p>

          <div className="mt-10">
            <a
              href="#_"
              className="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
              Get Promo Code
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
