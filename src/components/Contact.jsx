import React, { useState } from 'react';
import { 
  Mail,
  MapPin,
  Phone, 
  Instagram, 
  Github, 
  Linkedin, 
  Facebook,
  Send,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from 'emailjs-com';
import { toast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Basic validation
    if (!name || !email || !message) {
      toast.error('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'Mohideen Maheen',
        reply_to: email
      };

      console.log('Sending email with Service ID:', 'your_service_id');

       const response = await emailjs.send(
        'service_y4lxeoq',      // Replace with your EmailJS service ID
        'template_fzes0fl',     // Replace with your EmailJS template ID
        templateParams,
        'KLHXv9iKFwy8q4Ehe'       // Replace with your EmailJS public key
      );
      console.log('EmailJS Response:', response);

      if (response.status === 200) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        form.reset();
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      
      // Handle specific error types
      if (error.status === 412) {
        toast.error('Email service needs re-authentication. Please email me directly at: maheenmohideen@gmail.com');
      } else if (error.status === 400) {
        toast.error('Invalid email data. Please check your information.');
      } else if (error.status === 403) {
        toast.error('Email service access denied. Please try again later.');
      } else {
        toast.error('Failed to send message. Please email me directly at: maheenmohideen@gmail.com');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a question or want to work together?
          Feel free to reach out! 
          I'm always open to discussing new opportunities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6 px-18">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary"/>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:maheenmohideen@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    maheenmohideen@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary"/>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a 
                    href="tel:+918870573574" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8870573574
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary"/>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Tamil Nadu, India
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a 
                  href="https://www.linkedin.com/in/mohideen-maheen-a00214280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary"/>
                </a>
                <a 
                  href="https://github.com/Maheen0312" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Github className="h-5 w-5 text-primary"/>
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-primary"/>
                </a>
                <a 
                  href="https://www.facebook.com/share/1B7jq1qm68/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="h-5 w-5 text-primary"/>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2"
                > 
                  Your Name *
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed" 
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2"
                > 
                  Your Email *
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed" 
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2"
                > 
                  Your Message *
                </label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none disabled:opacity-50 disabled:cursor-not-allowed" 
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};