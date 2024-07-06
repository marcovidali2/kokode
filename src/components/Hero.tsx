import { ArrowDownIcon } from "@heroicons/react/16/solid";

const Hero = () => {
    return (
        <div
            className="hero"
            style={{
                backgroundImage: "url('/background.jpg')",
            }}
        >
            <div className="hero-overlay bg-opacity-70" />
            <div className="hero-content text-neutral-content text-center">
                <div className="flex flex-col justify-evenly h-dvh">
                    <div />

                    <div className="space-y-8">
                        <h1 className="text-4xl sm:text-6xl font-dm-serif-display">
                            Pizzeria Kokodè
                        </h1>

                        <p className="font-dm-serif-display text-2xl sm:text-4xl italic opacity-80">
                            “Autentica cucina italiana nel nostro accogliente
                            locale. Sapori unici, qualità protagonista.”
                        </p>
                    </div>

                    <div className="flex flex-col gap-12">
                        <a href="#menu">
                            <button className="btn btn-primary px-12">
                                Più su di noi
                                <ArrowDownIcon width={16} />
                            </button>
                        </a>

                        <a href="#menu">
                            <button className="btn btn-secondary text-sm">
                                Scopri il menù
                                <ArrowDownIcon width={16} />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
