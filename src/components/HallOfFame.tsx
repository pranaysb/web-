import { Section } from "./Layout";
import { HALL_OF_FAME } from "../data";

export const HallOfFame = () => {

    return (

        <Section className="py-40">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-5xl font-serif mb-20">
                    Cultural <span className="italic text-indigo-400">Hall of Fame</span>
                </h2>


                {HALL_OF_FAME.map((yearBlock, i) => (

                    <div key={i} className="mb-20">

                        {/* YEAR TITLE */}

                        <h3 className="text-3xl font-serif text-indigo-400 mb-10">
                            {yearBlock.year}
                        </h3>


                        {/* MEMBERS */}

                        <div className="grid md:grid-cols-3 gap-10">

                            {yearBlock.members.map((member, j) => (

                                <div
                                    key={j}
                                    className="bg-white/[0.02] border border-white/10 p-10 rounded-3xl"
                                >

                                    <h4 className="text-2xl font-serif mb-2">
                                        {member.name}
                                    </h4>

                                    <p className="text-indigo-400 text-xs mb-2">
                                        {member.role}
                                    </p>

                                    <p className="text-white/40 text-sm">
                                        {member.club}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </Section>

    );

};