import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Rocket, Heart } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices.",
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      description: "Built responsive web applications and RESTful APIs. Collaborated with design teams to create user-centered experiences.",
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "Creative Agency",
      description: "Developed interactive websites and web applications. Specialized in modern JavaScript frameworks and responsive design.",
    },
    {
      year: "2019",
      title: "Computer Science Graduate",
      company: "University of Technology",
      description: "Bachelor's degree in Computer Science with focus on software engineering and web development.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful, functional web experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Profile Image and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <div className="relative inline-block mb-8">
              <img
                src={profileImage}
                alt="Alex Johnson"
                className="w-64 h-64 rounded-full object-cover border-4 border-primary/20 floating-animation"
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 -z-10 blur-xl" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Hi there! 👋</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate full-stack developer with 5+ years of experience creating 
              web applications that users love. I believe in writing clean, maintainable 
              code and designing intuitive user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open source projects, or enjoying a good cup of coffee while reading tech blogs.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8">Skills & Technologies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="card-elegant p-6"
                >
                  <h4 className="font-semibold text-lg mb-3 text-primary">
                    {skill.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.8 + itemIndex * 0.05 }}
                        className="px-3 py-1 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">What Drives Me</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: "Clean Code",
                description: "Writing maintainable, scalable solutions",
              },
              {
                icon: Palette,
                title: "Great Design",
                description: "Creating beautiful, intuitive interfaces",
              },
              {
                icon: Rocket,
                title: "Innovation",
                description: "Exploring cutting-edge technologies",
              },
              {
                icon: Heart,
                title: "User Focus",
                description: "Building experiences users love",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center p-6 card-elegant"
              >
                <value.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">My Journey</h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {item.year}
                  </div>
                </div>
                <div className="card-elegant p-6 flex-1">
                  <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-primary font-medium mb-3">{item.company}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;