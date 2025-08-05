'use client'

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* DNA-like pattern with uniform string movement */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => {
          const x = (i / 39) * 100; // Spread across width
          const y1 = (i * 2.5) % 100; // First strand
          const y2 = (i * 2.5 + 40) % 100; // Second strand, offset
          const y3 = (i * 2.5 + 80) % 100; // Third strand, offset
          
          // Vary dot sizes
          const size1 = Math.random() > 0.7 ? 'w-1.5 h-1.5' : Math.random() > 0.4 ? 'w-1 h-1' : 'w-0.5 h-0.5';
          const size2 = Math.random() > 0.7 ? 'w-1.5 h-1.5' : Math.random() > 0.4 ? 'w-1 h-1' : 'w-0.5 h-0.5';
          const size3 = Math.random() > 0.7 ? 'w-1.5 h-1.5' : Math.random() > 0.4 ? 'w-1 h-1' : 'w-0.5 h-0.5';
          
          return (
            <div key={i}>
              {/* First strand - uniform movement */}
              <div
                className={`absolute ${size1} bg-[#2FDAA9] rounded-full opacity-20`}
                style={{
                  left: `${x}%`,
                  top: `${y1}%`,
                  animation: `stringWave ${8}s ease-in-out infinite`,
                  animationDelay: `${(i / 40) * 8}s`, // Staggered delay for wave effect
                }}
              />
              {/* Second strand - uniform movement */}
              <div
                className={`absolute ${size2} bg-[#2FDAA9] rounded-full opacity-20`}
                style={{
                  left: `${x}%`,
                  top: `${y2}%`,
                  animation: `stringWave ${8}s ease-in-out infinite`,
                  animationDelay: `${(i / 40) * 8 + 2}s`, // Offset by quarter cycle
                }}
              />
              {/* Third strand - uniform movement */}
              <div
                className={`absolute ${size3} bg-[#2FDAA9] rounded-full opacity-20`}
                style={{
                  left: `${x}%`,
                  top: `${y3}%`,
                  animation: `stringWave ${8}s ease-in-out infinite`,
                  animationDelay: `${(i / 40) * 8 + 4}s`, // Offset by half cycle
                }}
              />


            </div>
          );
        })}
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={`float-${i}`}
            className="absolute w-0.5 h-0.5 bg-[#2FDAA9] rounded-full opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `gentleFloat ${10 + Math.random() * 8}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes stringWave {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-15px) translateX(3px) scale(1.2);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-25px) translateX(-2px) scale(1.3);
            opacity: 0.2;
          }
          75% {
            transform: translateY(-10px) translateX(4px) scale(1.1);
            opacity: 0.12;
          }
        }
        
        @keyframes gentleFloat {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.05;
          }
          25% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-60px) translateX(-10px);
            opacity: 0.15;
          }
          75% {
            transform: translateY(-40px) translateX(25px);
            opacity: 0.08;
          }
          100% {
            transform: translateY(-80px) translateX(30px);
            opacity: 0.05;
          }
        }
      `}</style>
    </div>
  )
} 