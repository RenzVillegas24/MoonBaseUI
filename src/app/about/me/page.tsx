"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Badge,
  Button,
  useTheme,
  ThemeProvider,
} from "@/components/ui";
import { Mail, Phone, MapPin, Calendar, User, Award, Briefcase, GraduationCap, Code, Palette, Wrench, Globe, Facebook, Instagram, Github, Moon, Sun } from "lucide-react";

function ProfileComponent() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="container mx-auto px-4 py-10">
        {/* Header Card */}
        <Card className="mb-8">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-64 h-64 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center mb-4">
              <Image
                src="https://nhmsopkpgkdphujpcnez.supabase.co/storage/v1/object/public/images/about/me/profile.jpg"
                alt="Renz Justine L. Villegas"
                width={256}
                height={256}
                className="rounded-full object-cover"
              />
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              RENZ JUSTINE L. VILLEGAS, ECT
            </CardTitle>
            <CardDescription className="text-xl">Electronics and Communications Engineer</CardDescription>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Badge variant="secondary">ECE Technician</Badge>
              <Badge variant="secondary">Full-Stack Developer</Badge>
              <Badge variant="secondary">Moonbase Productions Founder</Badge>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-20 lg:self-start">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="font-medium">{new Date().getFullYear() - 2002} years old</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p className="font-medium">March 24, 2002</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Place of Birth</p>
                    <p className="font-medium">San Pablo, Santo Tomas City, Batangas</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p><span className="text-muted-foreground">Civil Status:</span> Single</p>
                  <p><span className="text-muted-foreground">Nationality:</span> Filipino</p>
                  <p><span className="text-muted-foreground">Religion:</span> Roman Catholic</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <Button variant="link" className="p-0 h-auto font-normal" asChild>
                      <a href="mailto:renzjustinevillegas@gmail.com">
                        renzjustinevillegas@gmail.com
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Facebook className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Facebook</p>
                    <Button variant="link" className="p-0 h-auto font-normal" asChild>
                      <a href="https://facebook.com/RenzJVillegas24">
                        facebook.com/RenzJVillegas24
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <Button variant="link" className="p-0 h-auto font-normal" asChild>
                      <a href="https://instagram.com/renzjvillegas24">
                        instagram.com/renzjvillegas24
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <Button variant="link" className="p-0 h-auto font-normal" asChild>
                      <a href="https://github.com/RenzVillegas24">
                        github.com/RenzVillegas24
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">09950057375</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium">625 San Pablo, Santo Tomas City, Batangas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Affiliations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Affiliations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="font-semibold text-primary">Moonbase Productions</p>
                    <p className="text-sm text-muted-foreground">Founder (2013 - Present)</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium">Robotics Club - STA</p>
                    <p className="text-sm text-muted-foreground">Competing Team (2014-2018)</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium">Google Developers Club - PUP STC</p>
                    <p className="text-sm text-muted-foreground">Chief Technology Officer (2021-2022)</p>
                    <p className="text-sm text-muted-foreground">Technical Director (2023-2024)</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium">Organization of Electronics Engineering Students</p>
                    <p className="text-sm text-muted-foreground">FortrECE Co-Chairman (2022-2023)</p>
                    <p className="text-sm text-muted-foreground">FortrECE Chairman (2023-2024)</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium">IECEP - Batangas</p>
                    <p className="text-sm text-muted-foreground">Member (2020-2024)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Professional Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Professional Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  Electronics and Communications Engineer with extensive experience in programming, web development,
                  multimedia production, and technical leadership. Founder of Moonbase Productions with a strong
                  background in robotics, IoT development, and digital marketing.
                </p>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Part-time Programming Commissioner",
                      company: "Work-at-home",
                      period: "2020 – Present",
                      description: "Remote programming work and technical consulting services.",
                    },
                    {
                      title: "Consultant (Digital Marketing Specialist)",
                      company: "Kabalikat sa Hanapbuhay Multi-Purpose Cooperative",
                      period: "2021",
                      description: "Santo Tomas City, Batangas. Provided digital marketing expertise and video editing services.",
                    },
                    {
                      title: "On-the-Job Training",
                      company: "Continental Temic Electronics (Phils.). Inc.",
                      period: "2023",
                      description: "Barangay La Mesa, Calamba City, Laguna. Electronics engineering training and practical experience.",
                    },
                    {
                      title: "Work Immersion",
                      company: "Torres Technology Center Corporation",
                      period: "2019",
                      description: "Makiling, Calamba, Laguna. Technology center internship and hands-on experience.",
                    },
                  ].map((job, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <Badge variant="outline">{job.period}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-2">{job.company}</p>
                      <p className="text-muted-foreground">{job.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Educational Attainment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    degree: "Bachelor of Science in Electronics and Communications Engineering",
                    school: "Polytechnic University of the Philippines - Santo Tomas Campus",
                    period: "2020-2024",
                    location: "Santo Tomas City, Batangas",
                  },
                  {
                    degree: "Senior High School - Science, Technology, Engineering and Mathematics (STEM)",
                    school: "St. Thomas Academy",
                    period: "2018-2020",
                    location: "Santo Tomas City, Batangas",
                  },
                  {
                    degree: "Junior High School",
                    school: "St. Thomas Academy",
                    period: "2014-2018",
                    location: "Santo Tomas City, Batangas",
                  },
                  {
                    degree: "Elementary",
                    school: "Santo Tomas North Central School",
                    period: "2008-2014",
                    location: "Santo Tomas City, Batangas",
                  },
                ].map((edu, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <Badge variant="secondary">{edu.period}</Badge>
                    </div>
                    <p className="text-primary font-medium">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Code className="w-4 h-4" />,
                      title: "Programming",
                      skills: ["C/C++, C#, Java, Kotlin", "Python/Jupyter, Dart", "JavaScript, TypeScript", "Arduino (.ino), VB.net, VBA", "OpenPCL, XML, JSON"],
                    },
                    {
                      icon: <Globe className="w-4 h-4" />,
                      title: "Web Development",
                      skills: ["HTML, CSS, PHP, JSP", "React, Angular, Next.js", "Node.js, Three.js, Django", "Bootstrap, Tailwind CSS", "Firebase, Supabase, MongoDB", "MySQL, PostgreSQL, SQLite"],
                    },
                    {
                      icon: <Palette className="w-4 h-4" />,
                      title: "Design & Multimedia",
                      skills: ["Adobe Photoshop, Illustrator", "Adobe Lightroom, After Effects", "Adobe Premiere Pro, Figma", "Canva, GIMP, Luminar Neo", "DaVinci Resolve, Blender"],
                    },
                    {
                      icon: <Wrench className="w-4 h-4" />,
                      title: "Development Tools",
                      skills: ["Visual Studio, VS Code", "Android Studio, IntelliJ", "Eclipse, NetBeans", "Arduino IDE, Platform IO"],
                    },
                    {
                      icon: <Palette className="w-4 h-4" />,
                      title: "Audio & Broadcasting",
                      skills: ["FL Studio, Audacity", "Antares Autotune, Bandlab", "OBS Studio, VoicePad"],
                    },
                    {
                      icon: <Wrench className="w-4 h-4" />,
                      title: "Hardware & PCB",
                      skills: ["KiCad, Proteus", "TinkerCad, Logisim", "Arduino Hardware"],
                    },
                  ].map((category, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border bg-card">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-1 rounded bg-primary/10 text-primary">
                          {category.icon}
                        </div>
                        <h3 className="font-semibold">{category.title}</h3>
                      </div>
                      <div className="space-y-1">
                        {category.skills.map((skill, skillIndex) => (
                          <p key={skillIndex} className="text-sm text-muted-foreground">{skill}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notable Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Notable Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "IECEP IoT Design Competition", award: "Champion", year: "2024" },
                    { title: "TransECEND 2023: Datathon", award: "Champion", year: "2023" },
                    { title: "13th ECEnemalaya Awards", award: "Multiple Awards", year: "2023" },
                    { title: "EMB CALABARZON: Green Flicks Contest", award: "Best Short Film", year: "2025" },
                    { title: "Academic Performance", award: "Top 9 & Silver Awardee", year: "2021-2024" },
                    { title: "Christmas Carole Contest", award: "Multiple Wins", year: "2021-2023" },
                  ].map((achievement, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border bg-gradient-to-r from-primary/5 to-primary/10">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="default">{achievement.year}</Badge>
                        <Award className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-sm text-primary font-medium">{achievement.award}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Footer Card */}
            <Card className="mt-8">
              <CardContent className="text-center py-4">
                <p className="text-sm text-muted-foreground">
                  This profile is a comprehensive overview of my professional journey, skills, and achievements. For more
                  information or to connect, feel free to reach out via the contact details provided above.
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  © {new Date().getFullYear()} Renz Justine L. Villegas. All rights reserved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MePage() {
  return <ProfileComponent />;
}