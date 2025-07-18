import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReviewSection } from '@/components/ReviewSection';
import { InlineWidget } from "react-calendly";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import {
  PhoneCall,
  Wrench,
  Clock,
  ShieldCheck,
  Settings,
  ShowerHead,
  Thermometer,
  ToiletIcon,
  AmbulanceIcon
} from "lucide-react";
import { ContactForm } from "./components/ui/contactForm";

const galleryImages = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.jpg",
  "img15.jpg",
  "img16.jpg",
  "img17.jpg",
  "img18.jpg",
  "img19.jpg",
  "img20.jpg",
  "img21.jpg",
  "img22.jpg",
  "img23.jpg",
  "img24.jpg",
  "img25.jpg",
  "img26.jpg"
];

export default function PlumbingServicesPage() {
  const [formData, setFormData] = useState({ name: "", email: "", date: "", message: "" });

  // 👇 Control state for both dialogs
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your service is scheduled for ${formData.date}. We will contact you soon to confirm.`);
    setFormData({ name: "", email: "", date: "", message: "" });
    setIsScheduleOpen(false); // close modal after submit
  };

  const [currentImageSlide, setCurrentImageSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageSlide((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 5000); // image carousel timer
    return () => clearInterval(interval);
  }, [currentImageSlide]);

  const handlePrev = () => {
    setCurrentImageSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const thumbnailRefs = useRef([]);

  useEffect(() => {
    const activeThumb = thumbnailRefs.current[currentImageSlide];
    if (activeThumb) {
      // Only scroll horizontally, prevent vertical page scroll
      const container = activeThumb.parentElement?.parentElement;

      if (container) {
        const containerRect = container.getBoundingClientRect();
        const thumbRect = activeThumb.getBoundingClientRect();

        const scrollLeft = container.scrollLeft;
        const offsetLeft = activeThumb.offsetLeft;
        const scrollTo = offsetLeft - container.clientWidth / 2 + activeThumb.clientWidth / 2;

        container.scrollTo({
          left: scrollTo,
          behavior: "smooth"
        });
      }
    }
  }, [currentImageSlide]);

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md p-4">
        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-3 sm:gap-6">

          {/* Logo */}
          <img
            src="/images/Logo64.svg"
            alt="E Plumbing and Sewer Logo"
            className="h-20 sm:h-24 w-auto object-contain"
          />

          {/* Contact + Phone Section */}
          <div className="flex flex-col items-end sm:flex-row sm:items-center sm:ml-auto gap-1 sm:gap-4">

            {/* Contact Us Button */}
            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-transform duration-200 transform hover:scale-105 active:scale-100"
                  onClick={() => setIsContactOpen(true)}
                >
                  Contact Us
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg text-blue-700">
                <DialogHeader>
                  <DialogTitle>Contact Us</DialogTitle>
                  <DialogDescription>
                    We'd love to hear from you. Fill out the form below. We do not retain any personal information.
                  </DialogDescription>
                </DialogHeader>
                  <ContactForm onSuccess={() => setIsContactOpen(false)} />
              </DialogContent>
            </Dialog>

            {/* Call Us */}
            <a
              href="tel:3147660395"
              className="flex items-center text-sm text-blue-700 font-medium transition-all duration-200 hover:text-white hover:bg-blue-700 px-4 py-2 rounded-full hover:scale-105 active:scale-100 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.51l.27 1.1a2 2 0 01-.45 1.84L7.21 9.79a16.06 16.06 0 007 7l2.34-2.34a2 2 0 011.84-.45l1.1.27A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.06 21 3 14.94 3 7V5z"
                />
              </svg>
              (314) 766-0395
            </a>

          </div>
        </div>
      </header>

      {/* Padding for fixed header */}
      <div className="pt-28">
        {/* Hero Section */}
        <section className="relative bg-fixed bg-center bg-cover bg-no-repeat py-16 text-center text-white bg-fixed-desktop" style={{ backgroundImage: "url('/images/background1.jpg')" }}>
          <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-md inline-block mx-auto text-blue-700">
            <h2 className="text-4xl font-semibold mb-6">Reliable Plumbing Services</h2>
            <p className="text-lg mb-6 max-w-xl mx-auto">
              From leaky faucets to full pipe installations — fast, friendly, and professional plumbing solutions in the Saint Louis area.
            </p>
            <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-blue-700 text-white px-6 py-3 text-lg rounded-xl shadow-md hover:bg-blue-800"
                  onClick={() => setIsScheduleOpen(true)}
                >
                  Schedule a Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>Schedule a Service</DialogTitle>
                  <InlineWidget
                    url="https://calendly.com/egdiel-eplumbingandsewer/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                  />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </section>
        {/* About Section */}
        <section className="py-16 px-4 bg-white text-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-blue-700">Locally owned and operated.</h3>
            <p className="text-lg mb-4">
              E Plumbing & Sewer is a full-service plumbing company based in St. Louis, Missouri.
              Whether it’s an emergency call or a renovation, all customers are treated as though they were family.
            </p>
            <p className="text-lg mb-4">
              We aim to establish and maintain long-term relationships with every client by providing professional and top-quality services.
            </p>
            <p className="text-lg mt-6 italic">
              Egdiel Tamayo, owner of E Plumbing & Sewer, is an experienced plumber with quality service always at the top of his mind.
              His mission is excellence from beginning to end — from accurately assessing a problem to leaving the workspace meticulously clean.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-blue-700 text-center">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent>
                <Wrench className="mx-auto text-blue-700" size={40} />
                <h3 className="text-xl font-semibold mt-4 mb-2">General Repairs</h3>
                <p>Quick fixes for leaks, clogs, and faulty fixtures.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <ShieldCheck className="mx-auto text-blue-700" size={40} />
                <h3 className="text-xl font-semibold mt-4 mb-2">New Constructions</h3>
                <p>Expert plumbing solutions for new builds and renovations.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <AmbulanceIcon className="mx-auto text-blue-700" size={40} />
                <h3 className="text-xl font-semibold mt-4 mb-2">Emergencies</h3>
                <p>Rapid response for urgent plumbing issues.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <Clock className="mx-auto text-blue-700" size={40} />
                <h3 className="text-xl font-semibold mt-4 mb-2">Routine Maintenance</h3>
                <p>Prevent future issues with regular system checkups.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <PhoneCall className="mx-auto text-blue-700" size={40} />
                <h3 className="text-xl font-semibold mt-4 mb-2">Free Estimates</h3>
                <p>No-obligation quotes to help you plan confidently.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <ToiletIcon className="mx-auto text-blue-700" size={40} />
                <h3 className="text-xl font-semibold mt-4 mb-2">Pipe Installation</h3>
                <p>Professional installation for new plumbing systems.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <ShowerHead className="mx-auto text-blue-700" size={40} />
                <h3 className="text-xl font-semibold mt-4 mb-2">Bathroom Remodeling</h3>
                <p>Upgrade your space with modern plumbing solutions.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <Thermometer className="mx-auto text-blue-700" size={40} />
                <h3 className="text-xl font-semibold mt-4 mb-2">Water Heater Services</h3>
                <p>Repair and replacement of all water heater types.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Gallery Section */}
        <section className="relative bg-fixed bg-center bg-cover bg-no-repeat py-16 px-4 text-white" style={{ backgroundImage: "url('/images/background1.jpg')" }}>
          <div className="max-w-6xl mx-auto bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
            <h3 className="text-3xl font-bold text-center mb-8 text-blue-700">Our Work Gallery</h3>

            {/* Carousel with sliding animation */}
            <div
              className="relative w-full max-h-[80vh] overflow-hidden rounded-xl flex items-center justify-center bg-white/10"
              onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
              onTouchEnd={(e) => setTouchEndX(e.changedTouches[0].clientX)}
            >
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentImageSlide * 100}%)`,
                  width: `${galleryImages.length * 100}%`,
                }}
              >
                {galleryImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={`/images/gallery/${img}`}
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-auto max-h-[80vh] object-contain mx-auto flex-shrink-0 bg-white/10 rounded-lg"
                  />
                ))}
              </div>

              {/* Arrows */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 backdrop-blur-md text-blue-700 p-2 rounded-full shadow-md hover:bg-white"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 backdrop-blur-md text-blue-700 p-2 rounded-full shadow-md hover:bg-white"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Thumbnails */}
            <div
              className="flex mt-6 gap-2 overflow-x-auto px-2 no-scrollbar"
              style={{
                overflowX: "auto",
                overflowY: "hidden",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollBehavior: "smooth"
              }}
            >
              <div className="flex w-max">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    ref={(el) => (thumbnailRefs.current[idx] = el)}
                    onClick={() => setCurrentImageSlide(idx)}
                    className={`flex-shrink-0 border-2 rounded-md overflow-hidden scroll-snap-align-center ${idx === currentImageSlide ? "border-blue-700" : "border-transparent"
                      }`}
                  >
                    <img
                      src={`/images/gallery/${img}`}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-20 h-16 object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <ReviewSection />

        {/* Footer */}
        <footer className="bg-white py-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} E Plumbing and Sewer, LLC. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
