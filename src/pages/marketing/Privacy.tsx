import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Privacy() {
  return (
    <div className='bg-zinc-50 min-h-screen flex flex-col text-zinc-800'>
      <Header />
      <section className='overflow-hidden border-b border-zinc-200 bg-white isolate px-6 py-20 relative'>
        <div className='max-w-6xl px-4 py-3 text-5xl font-bold mx-auto text-center flex flex-col gap-6'>
          Privacy Policy
        </div>
      </section>
      <section className='flex-1 h-full px-8 py-10 pb-16 border-b border-zinc-200'>
        <div className='max-w-3xl mx-auto marketing-texts'>
          <p>
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you visit or make a purchase from
            awale.store (the “Site”).
          </p>
          <p>
            <strong>Personal Information we collect</strong>
          </p>
          <p>
            When you create an account on the site, we collect the following
            personal information:
          </p>

          <ul>
            <li>Your name</li>
            <li>Your email address</li>
          </ul>
          <p>
            We use your name and email address for identification and
            authentication.
          </p>
          <p>
            You will also receive authentication emails at the email address
            provided.
          </p>
          <p>
            We <strong>DO NOT</strong> share any personal information to third
            parties.
          </p>

          <p>
            <strong>Changes</strong>
          </p>
          <p>
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
