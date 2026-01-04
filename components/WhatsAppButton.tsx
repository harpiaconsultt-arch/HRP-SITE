import React from 'react';

const WhatsAppButton: React.FC = () => {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=5531982162913&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Contact us on WhatsApp"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-white"
                fill="currentColor"
            >
                <path d="M19.05 4.94A9.85 9.85 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.3-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.73-1.11-5.2-2.9-7.07zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.81.83-3.04-.2-.31a8.34 8.34 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.23.86 5.82 2.45s2.45 3.62 2.45 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.2c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72s-.02-.38.1-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41.04-.3-.02-.43c-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.55-.42-.15 0-.3 0-.46 0s-.39.06-.6.31c-.2.25-.78.76-.78 1.85s.8 2.15.91 2.3s1.58 2.4 3.8 3.36c.55.24.93.38 1.24.48.55.17 1.05.14 1.44.09.43-.06 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.05-.12-.2-.19-.44-.31z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;