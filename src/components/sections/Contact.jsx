import { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => (
    <section 
      ref={ref} 
      className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-32" 
      id="contact"
    >
        <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Contact Us</h2>
            <p className="text-lg md:text-2xl text-gray-300 mb-12">Have any questions? Reach out to us!</p>
            <a href="mailto:StuyenceOlympiad@gmail.com">
                <p className="text-lg md:text-2xl text-cyan-300 underline hover:text-cyan-500 transition-colors">StuyenceOlympiad@gmail.com</p>
            </a>
        </div>
    </section>
));

export default Contact;