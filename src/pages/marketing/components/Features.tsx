import {
  CheckSquare2,
  CircleUserRound,
  FileBox,
  Store,
  Users,
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Effortless Collaboration',
      text: 'With AwaleERP, administrators can effortlessly create collaborator accounts, enabling smooth communication and coordination between teams and external contact.',
      icon: <Users />,
    },
    {
      title: 'Optimized Inventory Management',
      text: 'Simplify product management with our intuitive interface. Collaborators can create products, assign them to inventories, and streamline inventory tracking with easd.',
      icon: <FileBox />,
    },
    {
      title: 'Client-Centric Approach',
      text: 'Administrators and collaborators alike can easily add and manage client accounts, ensuring a personalized and attentive approach to client relationship.',
      icon: <CircleUserRound />,
    },
    {
      title: 'Streamlined Sales and Purchases',
      text: 'Facilitate sales and purchase processes effortlessly. Create and organize sale or purchase documents within customizable folders, ensuring clarity and efficiency throughout the transaction lifecycle',
      icon: <Store />,
    },
    {
      title: 'Seamless Integration, Exceptional Results',
      text: "Whether you're a commercial entity, a provider, or a constructor, AwaleERP seamlessly integrates into your workflow, empowering you to achieve exceptional results.",
      icon: <CheckSquare2 />,
    },
  ];
  return (
    <section id='features' className='py-16 bg-white'>
      <div className='max-w-6xl px-4 mx-auto text-center items-center flex flex-col gap-4'>
        <h3 className='text-3xl font-bold'>All the features you need.</h3>
        <p className='text-lg max-w-xl mb-4 opacity-65'>
          Everything you need to manage your business of sales/purchase cycles.
        </p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-3'>
          {features.map((feature, idx) => (
            <div key={idx} className='flex gap-4'>
              <div className='text-primary'>{feature.icon}</div>
              <div className='text-left'>
                <b className='font-semibold'>{feature.title}</b>
                <p className='text-sm mt-2 opacity-80'>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
