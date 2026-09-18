import React from 'react';
import { Coffee, ShieldCheck, Heart, Award, Sparkles, Flame, Users } from 'lucide-react';
import { COFFEE_IMAGES } from '../data/coffeeData';
import { RotatingCup } from './RotatingCup';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-20 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C88A58] font-bold block">
              Our Heritage &amp; Craft
            </span>
            <h1 className="font-handwritten text-4xl sm:text-5xl lg:text-6xl text-[#22110C] leading-tight">
              Where Passion Meets Specialty Roasting
            </h1>
            <div className="w-16 h-1 bg-[#C88A58] rounded-full" />
            <p className="text-[#532C20]/80 text-sm sm:text-base leading-relaxed">
              Founded on a genuine passion for artisanal coffee and the relentless pursuit
              of flavor harmony, Artistic was built as a warm neighborhood haven in Lahore where every
              cup is a sensory journey.
            </p>
            <p className="text-[#532C20]/80 text-sm sm:text-base leading-relaxed">
              We travel directly to micro-lot farms across Ethiopia, Colombia, Guatemala, and Sumatra to
              source only Specialty Grade Arabica (85+ SCA score), paying 40% above fair-trade floor prices.
            </p>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-[#C88A58]/20 filter blur-3xl scale-95" />
              <RotatingCup
                imageSrc={COFFEE_IMAGES.heroBeansSaucer}
                altText="Artisan Coffee Roasting Plate"
                size="lg"
                showControls={true}
                showSteam={true}
                initialSpeed="slow"
              />
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: 'Direct Trade Only',
              desc: 'Direct partnerships with multi-generation farm families without exploitative middle brokers.',
            },
            {
              icon: Flame,
              title: 'Small Drum Roasted',
              desc: 'Roasted in dedicated 12kg Diedrich infrared drums for unparalleled thermal precision.',
            },
            {
              icon: Award,
              title: 'SCA 86+ Scored',
              desc: 'Only the top 3% of global specialty yields earn a spot in our seasonal rotation.',
            },
            {
              icon: Heart,
              title: 'Welcoming Atmosphere',
              desc: 'Inviting ambient acoustic soundscapes, comfortable seating, and warm barista hospitality.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-[#F4ECE4] shadow-soft-card space-y-3 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FFEFEA] text-[#A3683A] flex items-center justify-center">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#22110C]">{item.title}</h3>
              <p className="text-xs text-[#532C20]/75 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Roasting Journey Visual Timeline */}
        <div className="bg-[#23120C] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="max-w-xl mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C88A58] font-bold block mb-1">
              From Soil to Savor
            </span>
            <h2 className="font-handwritten text-3xl sm:text-4xl text-white">
              The Roasting Evolution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Green Bean Intake',
                desc: 'Moisture tested (10.5-11.5%) and density graded upon dock arrival.',
              },
              {
                step: '02',
                title: 'The Maillard Phase',
                desc: 'Amino acids and sugars recombine, developing foundational caramel notes.',
              },
              {
                step: '03',
                title: 'First Crack Pop',
                desc: 'Exothermic expansion releases aromatic steam and distinct terroir acidity.',
              },
              {
                step: '04',
                title: 'Rapid Air Quench',
                desc: 'Cooled in 90 seconds flat to freeze volatile aromatic esters inside the bean.',
              },
            ].map((step) => (
              <div key={step.step} className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span className="font-mono text-2xl font-bold text-[#C88A58] block">{step.step}</span>
                <h4 className="font-bold text-sm text-white">{step.title}</h4>
                <p className="text-xs text-[#FAF7F2]/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
