// import React from 'react';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader } from 'lucide-react';

import authService from '@/services/http/auth.service';
import {
  signInSuccess,
  signInStart,
  signInFailure,
} from '@/redux/user/user.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { useNavigate } from 'react-router-dom';
import { LocalStorage } from '@/lib/utils';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
});

export default function SignIn() {
  const { loading } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   email: 'khaledsannyaml@gmail.com',
    //   password: 'secretSauce',
    // },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(signInStart());
    try {
      const res: {
        user: any;
        accessToken: string;
        refreshToken: string;
      } = await authService.login({
        emailOrPhone: values.email,
        password: values.password,
      });
      dispatch(signInSuccess(res));
      LocalStorage.set('token', res.accessToken);
      navigate('/');
    } catch (err: String | any) {
      toast.error(err);
      dispatch(signInFailure(err));
    }
  }

  return (
    <div className='flex min-h-screen bg-black'>
      <div className='flex-1 relative isolate flex flex-col text-white bg-zinc-800 overflow-hidden max-h-screen'>
        <svg
          width='677'
          height='677'
          viewBox='0 0 677 677'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='-translate-x-1/4 mix-blend-exclusion -translate-y-1/4 top-10 relative   origin-top-left'
        >
          <path
            className='zag-shape-primary'
            d='M122.006 -78.9162L233.819 -185.227L665.508 81.0549L582.002 217.471L402.41 106.692L544.812 372.456L452.478 443.224L499.761 506.358L384.002 615.148L276.72 521.83L177.189 618.939L-218.875 328.315L-124.823 199.005L-103.605 214.573L-148.745 148.27L-40.6216 51.1306L-114.281 -47.2245L4.44145 -153.301L165.003 1.32904L122.006 -78.9162Z'
            fill='red'
          />
        </svg>
        <svg
          width='677'
          height='677'
          viewBox='0 0 677 677'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='mt-auto ml-auto  translate-x-1/4 translate-y-1/4 rotate-180'
        >
          <path
            className='zag-shape-white'
            d='M122.006 -78.9162L233.819 -185.227L665.508 81.0549L582.002 217.471L402.41 106.692L544.812 372.456L452.478 443.224L499.761 506.358L384.002 615.148L276.72 521.83L177.189 618.939L-218.875 328.315L-124.823 199.005L-103.605 214.573L-148.745 148.27L-40.6216 51.1306L-114.281 -47.2245L4.44145 -153.301L165.003 1.32904L122.006 -78.9162Z'
            fill='black'
          />
        </svg>

        <div className='absolute  inset-0 flex flex-col justify-center items-center gap-6 p-8'>
          <span className='text-4xl text-center font-bold text-primary uppercase'>
            swoole
          </span>
          <p className='font-bold text-center text-2xl'>
            Run your business like never before.
          </p>
        </div>
      </div>
      <div className='flex-1 grid place-content-center max-w-xl gap-4 p-8 bg-zinc-50'>
        <div>
          <h1 className='text-zinc-800 font-medium text-3xl '>Welcome back</h1>
          <p className='text-zinc-400 w-[286px] text-sm'>
            Please enter your details.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-3 w-full max-w-xs'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-zinc-600'>Email</FormLabel>
                  <FormControl>
                    <Input
                      className='bg-zinc-100 border-zinc-200 text-zinc-700 placeholder:text-zinc-500 '
                      disabled={loading}
                      placeholder='Enter your email address'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-zinc-600'>Password</FormLabel>
                  <FormControl>
                    <Input
                      className='bg-zinc-100 border-zinc-200 text-zinc-700 placeholder:text-zinc-500'
                      disabled={loading}
                      placeholder='Enter your password'
                      type='password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='pt-4'>
              <Button disabled={loading} className=' w-full' type='submit'>
                {loading && <Loader className='mr-2 animate-spin' />}
                Sign In
              </Button>
            </div>
          </form>
        </Form>
      </div>
      {/* <h1 className='text-3xl font-bold  mb-4 text-slate-800'>SignIn</h1> */}
    </div>
  );
}
