import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
  const faqs = [
    {
      question: 'Who can use this app?',
      answer:
        'Our app is designed for businesses of all sizes and types, including commercial entities, providers, constructors, and more.',
    },
    {
      question: 'What key features does the app offer?',
      answer:
        'The app facilitates seamless collaboration, client management, inventory tracking, and streamlined sales and purchase processes.',
    },
    {
      question: 'How does the app ensure data security?',
      answer:
        'We prioritize data security with robust measures including encryption, access controls, and data backups.',
    },
    {
      question: 'Can the app be customized to fit specific business needs?',
      answer:
        'Yes, the app offers customization options to adapt to unique business requirements, such as customizing document templates and configuring workflows.',
    },
  ];
  return (
    <section className='py-8 md:py-16 border-t border-b border-zinc-200'>
      <div className='max-w-6xl px-8 mx-auto flex flex-col md:flex-row justify-between gap-6'>
        <div>
          <h3 className='text-3xl font-bold py-1 text-primary'>
            Frequently Asked Questions.
          </h3>
          <p className='text-zinc-600'>
            List of frequently asked questions about the software. <br />
            <Link to='/#faq' className='text-primary underline'>
              See more here &rarr;
            </Link>
          </p>
        </div>
        {/* <p className='text-lg max-w-xl mb-4'>
            Everything you need to create unlimited social media graphics for
            every platform.
          </p> */}
        {/* <div className='flex flex-col max-w-2xl gap-8 bg-white border border-zinc-200 p-8'> */}
        {/* <div className='bg-zinc-w shadow p-4 ring-1 ring-inset ring-gray-800/10 '> */}
        <div className='flex flex-col max-w-xl gap-8 bg-white border border-emerald-600/20 shadow-xl shadow-emerald-400/10 p-8'>
          {faqs.map((faq, idx) => (
            <div key={idx} className='text-left'>
              <b className='font-bold'>{faq.question}</b>
              <p className='mt-2 opacity-80'>{faq.answer}</p>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Faq;
