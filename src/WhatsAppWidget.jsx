import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '917340591251'; // WhatsApp number without + and spaces

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I found your portfolio and would like to discuss a project.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className={`whatsapp-widget ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <div className="whatsapp-popup">
            <div className="whatsapp-header">
              <div className="whatsapp-avatar">
                <MessageCircle size={24} />
              </div>
              <div className="whatsapp-info">
                <h4>KalKut Team</h4>
                <p>Typically replies instantly</p>
              </div>
              <button 
                className="whatsapp-close"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="whatsapp-body">
              <div className="whatsapp-message">
                <p>Hi there! 👋</p>
                <p>How can we help you today?</p>
              </div>
            </div>
            <div className="whatsapp-footer">
              <button 
                className="whatsapp-start-chat"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle size={18} />
                Start Chat
              </button>
            </div>
          </div>
        )}

        <button 
          className="whatsapp-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Chat on WhatsApp"
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </button>
      </div>
    </>
  );
};

export default WhatsAppWidget;
