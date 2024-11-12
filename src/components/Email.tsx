import React, { useState, ChangeEvent, FormEvent, FC } from 'react';
import Turnstile from 'react-turnstile';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  jobTitle: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  industry: string;
  fleetSize: string;
  useCase: string;
  demoDate: string;
  demoTime: string;
  areasOfInterest: string;
  additionalInfo: string;
}

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    jobTitle: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    industry: '',
    fleetSize: '',
    useCase: '',
    demoDate: '',
    demoTime: '',
    areasOfInterest: '',
    additionalInfo: '',
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus('Please complete the CAPTCHA');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          jobTitle: '',
          companyName: '',
          email: '',
          phoneNumber: '',
          industry: '',
          fleetSize: '',
          useCase: '',
          demoDate: '',
          demoTime: '',
          areasOfInterest: '',
          additionalInfo: '',
        });
        setCaptchaToken(null);
        onClose();
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred.');
    }
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button
        onClick={onClose}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Schedule a Demo
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-900 text-white p-8 rounded-lg max-w-xl h-[75vh] overflow-auto scroller w-full mx-4 relative shadow-lg">
          <button
              onClick={() => onClose()}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
              
            </button>
          
          <div className='overflow-auto h-[70vh] no-scroller'>

          
          
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Schedule a Demo</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Contact Information */}
              <h3 className="text-lg text-blue-400">Contact Information</h3>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded text-white" required />
              <input type="text" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded text-white" />
              <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded text-white" />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded text-white" required />
              <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded text-white" />

              {/* Company Information */}
              <h3 className="text-lg text-blue-400">Company Information</h3>
              <input type="text" name="industry" placeholder="Industry" value={formData.industry} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded text-white" />
              <input type="text" name="fleetSize" placeholder="Size of Fleet (if applicable)" value={formData.fleetSize} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded text-white" />
              <textarea name="useCase" placeholder="Primary Use Case for Hitch Guardian" value={formData.useCase} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded text-white" rows={3}></textarea>

              {/* Demo Preferences */}
              <h3 className="text-lg text-blue-400">Demo Preferences</h3>
              <input type="date" name="demoDate" value={formData.demoDate} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded text-white" />
              <input type="text" name="demoTime" placeholder="Preferred Time (including Time Zone)" value={formData.demoTime} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded text-white" />
              <textarea name="areasOfInterest" placeholder="Any Specific Areas of Interest (e.g., Features, Integration, etc.)" value={formData.areasOfInterest} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded text-white" rows={3}></textarea>

              <textarea name="additionalInfo" placeholder="Any Other Information You Would Like to Share?" value={formData.additionalInfo} onChange={handleChange} className="w-full p-3 bg-gray-800 rounded text-white" rows={3}></textarea>

              {/* Cloudflare Turnstile */}
              <Turnstile
                sitekey = {process.env.CLOUDFLARE || ""}
                onSuccess={(token) => setCaptchaToken(token)}
                theme="dark"
              />

              {/* Submit */}
              <button type="submit" className="w-full p-3 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold">
                Send
              </button>

              {status && <p className="text-center text-blue-300 mt-4">{status}</p>}
            </form>
          
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;
