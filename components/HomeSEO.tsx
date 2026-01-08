import React from 'react';

const HomeSEO: React.FC = () => {
    return (
        <section className="py-16 md:py-24 px-4 bg-[var(--bg)] text-[var(--text)] transition-colors duration-700">
            <div className="max-w-7xl mx-auto">
                <div className="glass-card p-8 md:p-12 rounded-3xl shadow-premium border border-[var(--border)]">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-bebas text-[var(--accent)] tracking-wide">
                        Global Export Excellence from India
                    </h2>

                    <div className="prose prose-lg dark:prose-invert max-w-none text-[var(--text-secondary)] space-y-4">
                        <p>
                            VEL WORLD is a leading global export company based in India, dedicated to facilitating seamless international trade.
                            We specialize in sourcing and exporting a diverse range of high-quality products, including agricultural produce,
                            coconut-based goods, safety matches, engineering derivatives, genuine leather goods, premium garments, and robust building materials.
                        </p>

                        <p>
                            Our mission is to bridge the gap between Indian manufacturers and global markets by ensuring transparency, reliability, and
                            uncompromising quality in every shipment. With a robust supply chain network and a deep understanding of international
                            trade regulations, we guarantee timely delivery and competitive pricing for our clients worldwide.
                        </p>

                        <p>
                            Whether you are looking for bulk agricultural sourcing, tailored engineering solutions, or fashion-forward apparel,
                            VEL WORLD stands as your trusted partner. We operate with a commitment to integrity and excellence, fostering
                            long-term partnerships that drive mutual growth and success in the global marketplace.
                        </p>

                        <p>
                            Experience the difference of working with a premier export house that values professionalism and customer satisfaction
                            above all. Connect with VEL WORLD today to explore our extensive product portfolio and discover how we can
                            elevate your business with the finest products from India.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSEO;
