import { motion } from "framer-motion";
import { Heart, Lightbulb, Target, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    icon: Users,
    title: "Multi-Level Community",
    description: "From students to investors, everyone finds their place and purpose in our structured ecosystem.",
    gradient: "from-prysm-grad-1"
  },
  {
    icon: Target,
    title: "Reciprocal Learning",
    description: "Every member both teaches and learns, creating a sustainable cycle of growth and knowledge sharing.",
    gradient: "from-prysm-grad-2"
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Fresh perspectives meet experienced guidance to drive innovation and breakthrough solutions.",
    gradient: "from-prysm-grad-3"
  },
  {
    icon: TrendingUp,
    title: "Career Acceleration",
    description: "Fast-track your professional journey through mentorship, networking, and real opportunities.",
    gradient: "from-prysm-grad-5"
  }
];

export function CommunityOverview() {
  return (
    <section
      id="community"
      className="py-24"
      style={{
        background: "#150d33"
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold"
            initial={{ opacity: 0, scale: 0.8 }}
            style={{color:"white"}}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Together, We Create Impact 
          </motion.h2>
          <motion.p 
            className="text-lg"
            style={{ color: "var(--prysm-foreground)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Building a community where knowledge flows seamlessly and opportunities abound
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="h-full text-center hover:shadow-prysm-glow transition-all duration-300 border-0 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    borderColor: "rgba(255, 255, 255, 0.06)"
                  }}
                >
                  <CardHeader className="pb-4">
                    <div 
                      className="mx-auto w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: `var(--prysm-grad-${index % 5 + 1})`
                      }}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed" style={{ color: "var(--prysm-foreground)" }}>
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card
              className="h-full border-0 shadow-prysm-glow backdrop-blur-sm"
              style={{
                background: "rgba(255,255,255,0.02)"
              }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div style={{ background: 'var(--prysm-grad-1)' }} className="p-3 rounded-xl">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed" style={{ color: "var(--prysm-foreground)" }}>
                  To create a global ecosystem where knowledge flows seamlessly across all professional levels, 
                  fostering innovation, accelerating careers, and building lasting mentorship relationships 
                  that transform individuals and communities.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              className="h-full border-0 shadow-prysm-glow backdrop-blur-sm"
              style={{
                background: "rgba(255,255,255,0.02)"
              }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div style={{ background: 'var(--prysm-grad-3)' }} className="p-3 rounded-xl">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed" style={{ color: "var(--prysm-foreground)" }}>
                  We connect students, professionals, founders, and investors through structured mentorship programs 
                  and reciprocal learning experiences. Every member both contributes expertise and gains new perspectives, 
                  creating a thriving community of mutual growth and success.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}