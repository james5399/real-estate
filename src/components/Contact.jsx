import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "57cd1212-bcbb-451b-adc3-5ddcc4e25e12");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form submitted successfully.");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <motion.div initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{once: true}} className='text-center lg:px-32 p-6 py-20 w-full' id='Contact'>
          <h1 className='text-3xl sm:text-4xl font-bold text-center'>Contact <span className='text-blue-500'>With Us</span></h1>
      <p className='text-center mt-4 text-lg text-gray-700 max-w-80 mx-auto mb-8'>Have questions? We'd love to hear from you.</p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto pt-8 text-gray-700'>
        <div className='flex flex-wrap mb-4'>
          <div className='text-left width-full md:w-1/2'>
            Your Name
            <input type="text" placeholder='Your Name' className='w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2'/>
          </div>
          <div className='text-left width-full md:w-1/2 md:pl-4'>
            Your Email
            <input type="email" placeholder='Your Email is required' className='w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2'/>
          </div>
        </div>
        <div className='text-left width-full'>
          Your Message
          <textarea placeholder='Your Message' className='w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2' resize-none rows='4'/>
        </div>
        <button type='submit' className='bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>{result ? result : "Send Message"}
          
        </button>
      </form>
      
    </motion.div>
  )
}

export default Contact
