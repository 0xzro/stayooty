"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CalendarDays, Check, ChevronDown, Menu, Minus, Plus, ShieldCheck, Sparkles, Star, X } from "lucide-react";

const rooms = [
  {
    name: "Heritage Deluxe",
    type: "A warm, character-filled stay",
    price: "₹3,499",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
    details: "Comfortable interiors, thoughtful essentials and a peaceful atmosphere.",
    tag: "GUEST FAVOURITE",
  },
  {
    name: "Garden View Suite",
    type: "Room to slow down",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    details: "A spacious suite with relaxing views and extra room for longer stays.",
    tag: "MORE SPACE",
  },
  {
    name: "Family Residence",
    type: "Together feels better",
    price: "₹6,499",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    details: "A welcoming option for families and small groups travelling together.",
    tag: "FAMILY PICK",
  },
];

export default function Site() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [adults, setAdults] = useState(2);
  const [roomsCount, setRoomsCount] = useState(1);
  const [notice, setNotice] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");

  const nights = useMemo(() => {
    if (!arrival || !departure) return 0;
    const diff = new Date(departure).getTime() - new Date(arrival).getTime();
    return Math.max(0, Math.round(diff / 86400000));
  }, [arrival, departure]);

  function checkAvailability() {
    if (!arrival || !departure) {
      setNotice("Please select your check-in and check-out dates.");
      return;
    }
    if (nights < 1) {
      setNotice("Check-out must be at least one day after check-in.");
      return;
    }
    setNotice(`Your search is ready: ${nights} night${nights > 1 ? "s" : ""}, ${adults} guest(s), ${roomsCount} room(s). Connect a live booking backend to confirm availability.`);
  }

  return (
    <main>
      <div className="announcement">A little closer to the hills. A lot closer to feeling at home.</div>
      <header className="header">
        <a className="brand" href="#" aria-label="StayOoty home">
          <span className="brand-mark">S</span>
          <span><strong>STAYOOTY</strong><small>BY GOKUL GROUPS</small></span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#stays" onClick={() => setMenuOpen(false)}>Our stays</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experiences</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Our story</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-book" href="#booking" onClick={() => setMenuOpen(false)}>Book your stay <ArrowRight size={15}/></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X/> : <Menu/>}
        </button>
      </header>

      <section className="hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light"><span/> OOTY · THE NILGIRIS</p>
          <h1>Find your quiet<br/><em>in the hills.</em></h1>
          <p className="hero-copy">A thoughtful stay, warm hospitality and the timeless charm of the Nilgiris. Your Ooty story begins here.</p>
          <a href="#booking" className="gold-button">Discover your stay <ArrowRight size={17}/></a>
        </div>
        <div className="hero-note"><span>11.4° N</span><i/> <span>76.7° E</span><small>THE NILGIRI HILLS</small></div>
      </section>

      <section className="booking-wrap" id="booking">
        <div className="booking-intro"><span className="eyebrow">PLAN YOUR ESCAPE</span><h2>Make time for the mountains.</h2></div>
        <div className="booking-card">
          <label><span><CalendarDays size={16}/> CHECK IN</span><input type="date" value={arrival} min={new Date().toISOString().slice(0,10)} onChange={e => setArrival(e.target.value)}/></label>
          <label><span><CalendarDays size={16}/> CHECK OUT</span><input type="date" value={departure} min={arrival || new Date().toISOString().slice(0,10)} onChange={e => setDeparture(e.target.value)}/></label>
          <div className="stepper"><span>GUESTS</span><div><button onClick={() => setAdults(Math.max(1, adults - 1))} aria-label="Remove guest"><Minus size={14}/></button><b>{adults}</b><button onClick={() => setAdults(Math.min(12, adults + 1))} aria-label="Add guest"><Plus size={14}/></button></div></div>
          <div className="stepper"><span>ROOMS</span><div><button onClick={() => setRoomsCount(Math.max(1, roomsCount - 1))} aria-label="Remove room"><Minus size={14}/></button><b>{roomsCount}</b><button onClick={() => setRoomsCount(Math.min(6, roomsCount + 1))} aria-label="Add room"><Plus size={14}/></button></div></div>
          <button className="search-button" onClick={checkAvailability}>Check availability <ArrowRight size={16}/></button>
        </div>
        {notice && <p className="notice" role="status">{notice}</p>}
        <p className="booking-foot"><ShieldCheck size={14}/> Secure booking experience · No payment required to enquire</p>
      </section>

      <section className="section intro-section" id="about">
        <div className="intro-photo" />
        <div className="intro-text">
          <p className="eyebrow">A STAY WITH A STORY</p>
          <h2>Hospitality that<br/><em>feels personal.</em></h2>
          <p>Some places are made for seeing. Others are made for feeling. At StayOoty, we believe the best journeys are shaped by the little things — a warm welcome, a slower morning and a place that feels just right.</p>
          <a className="text-link" href="#experience">The StayOoty feeling <ArrowRight size={16}/></a>
          <div className="signature">Stay a little longer.</div>
        </div>
      </section>

      <section className="stays-section section" id="stays">
        <div className="section-heading">
          <div><p className="eyebrow">YOUR PLACE IN THE NILGIRIS</p><h2>Spaces to <em>unwind.</em></h2></div>
          <a className="text-link" href="#contact">Explore all rooms <ArrowRight size={16}/></a>
        </div>
        <div className="room-grid">
          {rooms.map((room) => (
            <article className="room-card" key={room.name}>
              <div className="room-image" style={{ backgroundImage: `url("${room.image}")` }}><span>{room.tag}</span></div>
              <div className="room-info"><div><p>{room.type}</p><h3>{room.name}</h3></div><div className="room-price"><small>FROM</small><strong>{room.price}</strong><small>/ NIGHT*</small></div></div>
              <p className="room-desc">{room.details}</p>
              <button className="room-link" onClick={() => { setSelectedRoom(room.name); setNotice(`${room.name} selected. Room pricing and availability are sample content until connected to the hotel inventory.`); document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" }); }}>Explore room <ArrowRight size={15}/></button>
            </article>
          ))}
        </div>
        <p className="fine-print">*Illustrative starting prices for design preview only. Replace with approved live hotel rates before launch.</p>
      </section>

      <section className="experience" id="experience">
        <div className="experience-bg"/>
        <div className="experience-content"><p className="eyebrow light">BEYOND THE ROOM</p><h2>Let the hills<br/><em>set the pace.</em></h2><p>Tea gardens, misty mornings, winding roads and moments worth remembering. Make your stay about more than just a place to sleep.</p><a className="gold-button" href="#contact">Plan your experience <ArrowRight size={16}/></a></div>
      </section>

      <section className="quote-section">
        <Sparkles size={21}/><p>“The best kind of luxury is having nowhere else you need to be.”</p><span>THE STAYOOTY PHILOSOPHY</span>
      </section>

      <footer id="contact">
        <div className="footer-main">
          <div><a className="brand footer-brand" href="#"><span className="brand-mark">S</span><span><strong>STAYOOTY</strong><small>BY GOKUL GROUPS</small></span></a><p>Thoughtful stays. Timeless hills.<br/>A warmer way to experience Ooty.</p></div>
          <div><h4>EXPLORE</h4><a href="#stays">Our stays</a><a href="#experience">Experiences</a><a href="#about">Our story</a></div>
          <div><h4>GET IN TOUCH</h4><a href="mailto:reservations@stayooty.in">reservations@stayooty.in</a><a href="https://stayooty.in/">Current website</a><span>Ooty, Tamil Nadu, India</span></div>
          <div className="footer-cta"><p>Ready for a change of altitude?</p><a className="gold-button" href="#booking">Book your stay <ArrowRight size={16}/></a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} StayOoty · Gokul Groups</span><span>Privacy · Terms · Cancellation policy</span><span>Made for the mountains.</span></div>
      </footer>
      {selectedRoom && <div className="selected-room" role="status"><Check size={15}/> {selectedRoom} selected <button onClick={() => setSelectedRoom("")} aria-label="Dismiss"><X size={14}/></button></div>}
    </main>
  );
}