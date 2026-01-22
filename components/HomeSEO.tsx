import React from 'react';

const HomeSEO: React.FC = () => {
    return (
        <section className="py-16 md:py-24 px-4 bg-[var(--bg)] text-[var(--text)] transition-colors duration-700">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* Left Column: Existing SEO Content - UNCHANGED */}
                    <div className="glass-card p-8 md:p-12 rounded-3xl shadow-premium border border-[var(--border)] h-full">
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

                    {/* Right Column: New CEO Section */}
                    <div className="glass-card p-8 md:p-12 rounded-3xl shadow-premium border border-[var(--border)] h-full flex flex-col justify-between relative overflow-hidden">

                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[var(--accent)] shadow-lg flex-shrink-0">
                                    <img
                                        src="/image/ceo_profile.png"
                                        alt="CEO of Vel World"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold font-bebas text-[var(--accent)] tracking-wide">
                                        The Voice of Leadership
                                    </h3>
                                    <div className="text-sm font-medium text-[var(--text-secondary)] tracking-widest uppercase">
                                        CEO, Vel World
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-lg dark:prose-invert max-w-none text-[var(--text-secondary)] space-y-4 relative z-10">
                                <p className="italic font-medium text-[var(--text)]">
                                    "VEL WORLD stands for Tenacious Trade—trade that endures, adapts and delivers no matter the market conditions. We built VEL WORLD to be tenacious in standards, disciplined in processes, and uncompromising in delivery. We do not measure success by volume alone, but by long-term partnerships, repeat clients, and reputations earned shipment by shipment.
                                </p>
                                <p className="italic font-medium text-[var(--text)]">
                                    Connecting India’s rich resources to the global demand requires more than just logistics, it requires a commitment to integrity. We have very clear principle to enrich the Indian economy by uplifting the manufacturing sector."
                                </p>
                                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                                    <p className="font-bold text-xl text-[var(--accent)] mb-2">
                                        Welcome to a world of tenacious trade.
                                    </p>
                                    <p className="text-base font-semibold">
                                        This is not just our business.<br />
                                        This is our legacy in the making.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative quotes background */}
                        <div className="absolute top-4 right-4 text-[10rem] leading-none text-[var(--accent)] opacity-5 pointer-events-none font-serif">
                            &rdquo;
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSEO;
