import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building,
  GraduationCap,
  Handshake,
  Network,
  Rocket,
  Star,
  Target,
  TrendingUp
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const userLevels = [
  {
    level: "Level 1",
    title: "Students",
    subtitle: "Learning, Career Growth & Industry Exposure",
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    benefits: {
      receive: [
        "Industry mentorship and career guidance from experienced professionals",
        "Mock interviews, skill development, and job referrals",
        "Professional network building and trend insights"
      ],
      give: [
        "Fresh perspectives and innovative thinking to projects",
        "Peer collaboration and future mentorship to newcomers"
      ]
    }
  },
  {
    level: "Level 2",
    title: "Early Professionals",
    subtitle: "Career Acceleration & Visibility",
    icon: Briefcase,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    benefits: {
      receive: [
        "Career advancement mentorship from senior professionals",
        "Leadership opportunities and expanded professional networks",
        "Direct job referrals and industry credibility building"
      ],
      give: [
        "Recent graduate insights and guidance to current students",
        "Bridge connection between students and senior professionals"
      ]
    }
  },
  {
    level: "Level 3",
    title: "Early-Stage Startup Founders",
    subtitle: "Building & Scaling",
    icon: Rocket,
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
    benefits: {
      receive: [
        "Strategic business advice from experienced entrepreneurs",
        "Direct investor exposure and funding opportunities",
        "Access to talent pool and potential business collaborators"
      ],
      give: [
        "Innovation mindset and entrepreneurial opportunities for others",
        "Real-world startup experience and case studies"
      ]
    }
  },
  {
    level: "Level 4",
    title: "Business Leaders",
    subtitle: "Growth, Impact & Network Expansion",
    icon: Building,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    benefits: {
      receive: [
        "Access to skilled talent and innovative startup partnerships",
        "Business expansion through community referrals",
        "Personal fulfillment through impactful mentorship"
      ],
      give: [
        "Industry expertise and strategic business guidance",
        "Job opportunities and market insights for community members"
      ]
    }
  },
  {
    level: "Level 5",
    title: "Investors",
    subtitle: "Finding the Next Big Opportunity",
    icon: TrendingUp,
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
    benefits: {
      receive: [
        "Curated access to high-potential startups and deal flow",
        "Market insights and collaborative investment opportunities",
        "Network expansion with other investors and entrepreneurs"
      ],
      give: [
        "Funding opportunities and strategic business mentorship",
        "Success stories and inspiration to the entire community"
      ]
    }
  }
];

export function UserLevels() {
  return (
    <section id="ecosystem" className="py-24" style={{ background: "#150d33" }}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The PRYSM Ecosystem          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            style={{ color: "white" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover how each member contributes to and benefits from our thriving ecosystem
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {userLevels.map((level, index) => {
            const IconComponent = level.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0">
                  <CardHeader className="relative overflow-hidden" style={{ background: "rgba(255,255,255,0.02)" }}>
                    {/* Subtle decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>

                    <div className="flex items-center space-x-6 relative z-10">
                      <motion.div
                        className="p-4 rounded-2xl shadow-lg"
                        style={{ background: `var(--prysm-grad-${(index % 5) + 1})` }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="secondary" className="bg-white/10 text-white">
                            {level.level}
                          </Badge>
                          <CardTitle className="text-2xl text-white">{level.title}</CardTitle>
                        </div>
                        <CardDescription className="text-lg" style={{ color: 'var(--prysm-muted)' }}>
                          {level.subtitle}
                        </CardDescription>
                      </div>
                      <Star className="h-6 w-6" style={{ color: 'var(--prysm-grad-5)' }} />
                    </div>
                  </CardHeader>

                  <CardContent className="pt-8 pb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* What They Receive */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="p-2 rounded-lg" style={{ background: 'var(--prysm-grad-3)' }}>
                            <Target className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="text-xl text-white">What They Receive</h4>
                        </div>
                        <div className="space-y-3">
                          {level.benefits.receive.map((benefit, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start space-x-3 p-3 rounded-lg"
                              style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.04)" }}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: 'var(--prysm-grad-3)' }} />
                              <span className="text-sm" style={{ color: 'var(--prysm-foreground)' }}>{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* What They Give */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="p-2 rounded-lg" style={{ background: 'var(--prysm-grad-2)' }}>
                            <Handshake className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="text-xl text-white">What They Give</h4>
                        </div>
                        <div className="space-y-3">
                          {level.benefits.give.map((contribution, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start space-x-3 p-3 rounded-lg"
                              style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.04)" }}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: 'var(--prysm-grad-2)' }} />
                              <span className="text-sm" style={{ color: 'var(--prysm-foreground)' }}>{contribution}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Call to Action - Fixed rotating icon issue */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto items-center">
            <div className="grid gap-8 items-center">
              {/* Left: Text + CTAs */}
              <div>
                <h3 className="text-3xl mb-4 text-white">Ready to Join?</h3>
                <p className="text-white/80 mb-6">
                  Be among the first to join our community. Help us build something amazing together
                  as we create the future of mentorship and professional growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://www.linkedin.com/company/prismhub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-3 rounded-2xl font-semibold text-lg"
                    style={{ background: 'var(--prysm-grad-1)', color: '#fff', boxShadow: '0 12px 30px rgba(124,58,237,0.16), 0 4px 10px rgba(0,0,0,0.18)' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Connect With Us</span>
                    <ArrowRight className="h-5 w-5 ml-3" />
                  </motion.a>

                  {/* <motion.a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-2xl font-medium text-lg"
                    style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'var(--prysm-foreground)', background: 'transparent' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.a> */}
                </div>
              </div>

              {/* Right: Visual */}
              {/* <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div
                    className="rounded-3xl p-8"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      boxShadow: '0 18px 50px rgba(124,58,237,0.12), 0 6px 18px rgba(0,0,0,0.22)'
                    }}
                  >
                    <div className="flex items-center justify-center">
                      <div className="rounded-full w-28 h-28 flex items-center justify-center shadow-lg" style={{ background: 'var(--prysm-grad-1)' }}>
                        <Network className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-white font-medium">Join a network of mentors & builders</p>
                      <p className="text-white/70 text-sm mt-2">Fast-track learning, find collaborators, and get real opportunities.</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-5 left-4 p-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                    <span className="text-xs" style={{ color: 'var(--prysm-grad-2)' }}>Free to join • Open roles</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}