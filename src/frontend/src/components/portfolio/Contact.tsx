import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "maulyasoni.it@gmail.com",
    href: "mailto:maulyasoni.it@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6351246380",
    href: "tel:+916351246380",
  },
  { icon: MapPin, label: "Location", value: "Gujarat, India", href: null },
];

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maulya-soni-6ba03734b/",
  },
  { icon: Github, label: "GitHub", href: "https://github.com/MaulyaSoni" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            reply_to: form.email,
            subject: form.subject,
            message: form.message,
          }
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("idle");
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      setStatus("idle");
      alert("Oops! There was a problem submitting your form");
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-4xl text-foreground mb-3">
            Let&#39;s Build Something Together
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Open to internships, collaborations, and interesting AI/ML projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-foreground">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wider">
                Connect
              </h3>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    data-ocid={`contact.${social.label.toLowerCase()}_link`}
                    className="p-3 rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {status === "sent" ? (
              <div
                data-ocid="contact.success_state"
                className="h-full flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-card border border-border"
              >
                <CheckCircle className="w-12 h-12 text-primary" />
                <h3 className="font-display font-semibold text-lg text-foreground">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-center text-sm">
                  Thanks for reaching out. I&#39;ll get back to you soon.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStatus("idle")}
                  data-ocid="contact.send_another_button"
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 rounded-2xl bg-card border border-border space-y-4"
                data-ocid="contact.form"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      data-ocid="contact.name_input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      data-ocid="contact.email_input"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="subject" className="text-sm">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    data-ocid="contact.subject_input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    data-ocid="contact.message_textarea"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  data-ocid="contact.submit_button"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl gap-2 transition-all duration-200"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
