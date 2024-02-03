import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarList } from '@tremor/react';
import { Loader } from 'lucide-react';
import React from 'react';

const ChartOfUserDistribution = () => {
  const userData = [
    {
      id: 'e17c705f-ec44-4581-8c52-c48faeb1d1c0',
      reference: 'CON-f41c72ff79',
      email: 'roroguidi@gmail.com',
      first_name: 'Roselin',
      last_name: 'GBAGUIDI',
      phone_number: '58741256',
      gender: 'MAN',
      group: 'COLLABORATORS',
      role: 'CONSTRUCTOR',
      avatar_url:
        'https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg',
      is_email_verified: false,
      created_at: '2024-01-31T23:56:49.301Z',
      updated_at: '2024-01-31T23:56:49.301Z',
    },
    {
      id: 'a66680ee-0212-4701-bf18-53fd35499e8f',
      reference: 'CON-bb39265765',
      email: 'jennyarman@gmail.com',
      first_name: 'Jennifer',
      last_name: 'Armantrou',
      phone_number: '58222336',
      gender: 'WOMAN',
      group: 'COLLABORATORS',
      role: 'CONSTRUCTOR',
      avatar_url:
        'https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg',
      is_email_verified: false,
      created_at: '2024-01-31T23:57:39.546Z',
      updated_at: '2024-01-31T23:57:39.546Z',
    },
    {
      id: 'a5687415-d7a1-404b-bc9b-3f8b66c2d6ca',
      reference: 'CON-8c87cb4d57',
      email: 'ezioauditore@gmail.com',
      first_name: 'Ezio',
      last_name: 'AUDITORE',
      phone_number: '155664115',
      gender: 'MAN',
      group: 'COLLABORATORS',
      role: 'PROVIDER',
      avatar_url:
        'https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg',
      is_email_verified: false,
      created_at: '2024-01-31T23:58:16.728Z',
      updated_at: '2024-01-31T23:58:16.728Z',
    },
    {
      id: '04adcf5e-e126-4aa0-a4a7-d084e49aed4c',
      reference: 'CON-d356a5c4a9',
      email: 'kevdurant@gmail.com',
      first_name: 'Kevin',
      last_name: 'Durant',
      phone_number: '21896267',
      gender: 'MAN',
      group: 'COLLABORATORS',
      role: 'COMMERCIAL',
      avatar_url:
        'https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg',
      is_email_verified: false,
      created_at: '2024-01-31T23:58:58.279Z',
      updated_at: '2024-01-31T23:58:58.279Z',
    },
    {
      id: '22db1890-66dc-423c-86ea-e89acb0428af',
      reference: 'CON-a2fb26bf4d',
      email: 'marmonroe@yahoo.mail',
      first_name: 'Marilyn',
      last_name: 'Monroe',
      phone_number: '96325417',
      gender: 'WOMAN',
      group: 'COLLABORATORS',
      role: 'PROVIDER',
      avatar_url:
        'https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg',
      is_email_verified: false,
      created_at: '2024-01-31T23:59:35.950Z',
      updated_at: '2024-01-31T23:59:35.950Z',
    },
    {
      id: '10897dd1-4e84-4ddf-91dc-8c1788c4c4ba',
      reference: 'CON-57bfc7e584',
      email: 'khaledsannyaml@gmail.com',
      first_name: 'Khaled',
      last_name: 'SANNY',
      phone_number: '61640292',
      gender: 'MAN',
      group: 'ADMINS',
      role: 'ADMIN',
      avatar_url:
        'https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg',
      is_email_verified: false,
      created_at: '2024-01-25T23:15:02.860Z',
      updated_at: '2024-01-26T13:01:17.624Z',
    },
    {
      id: '4d353cf4-118a-4862-9a49-857880ea4799',
      reference: 'CON-c9f92e3a9c',
      email: 'antomiss@gmail.com',
      first_name: 'Antony',
      last_name: 'MINSSINHOUN',
      phone_number: '61640292',
      gender: 'MAN',
      group: 'ADMINS',
      role: 'ADMIN',
      avatar_url:
        'https://khaledsanny.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkhaled_sanny.11d7c49e.jpg&w=256&q=75',
      is_email_verified: false,
      created_at: '2024-01-25T22:53:27.363Z',
      updated_at: '2024-01-31T23:39:58.879Z',
    },
  ];

  // Transform data for Recharts
  const userDistribution = userData.reduce((acc, user) => {
    // @ts-ignore
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});

  const data = Object.keys(userDistribution).map((role) => ({
    name: role,
    // @ts-ignore
    value: userDistribution[role],
  }));
  // const valueFormatter = (number: number) =>
  //   `$ ${new Intl.NumberFormat('us').format(number).toString()}`;

  return (
    <Card className='text-xs flex-1 md:flex-initial min-w-[280px] font-medium'>
      <CardHeader>
        <CardTitle className='text-md'>User distribution</CardTitle>
      </CardHeader>
      <CardContent>
        {/* <div className='flex p-6 justify-center items-center mb-4 h-[150px] w-full'>
          <Loader size={30} className='animate-spin text-primary' />
        </div> */}
        <BarList color='emerald' data={data} />
      </CardContent>
    </Card>
    // <Card className='text-xs font-medium pb-4 w-fit'>
    //   <h3 className='text-md font-semibold p-3 px-5'>User distribution</h3>
    //   <div className='flex p-6 justify-center items-center mb-4 h-[250px] w-[300px]'>
    //     <Loader size={30} className='animate-spin text-primary' />
    //   </div>
    //   <div className='flex justify-center'>
    //     <PieChart width={300} height={250}>
    //       <Pie
    //         dataKey='value'
    //         isAnimationActive={false}
    //         data={data}
    //         cx='50%'
    //         cy='50%'
    //         outerRadius={80}
    //         fill='#2fc17590'
    //         label
    //       >
    //         {data.map((entry, index) => (
    //           <Cell
    //             key={`cell-${index}`}
    //             fill={colors[index % colors.length]}
    //           />
    //         ))}
    //       </Pie>
    //       <Tooltip />
    //       <Legend />
    //     </PieChart>
    //   </div>
    // </Card>
  );
};

export default ChartOfUserDistribution;
