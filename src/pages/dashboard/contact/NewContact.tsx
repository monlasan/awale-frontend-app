import React from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Loader, Save } from 'lucide-react';
import { generateRandomPassword } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import authService from '@/services/http/auth.service';

const formSchema = z.object({
  first_name: z.string().min(1, 'Please enter a first name'),
  last_name: z.string().min(1, 'Please enter a last name'),
  email: z.string().email('Please enter a valid email'),
  gender: z.string().min(1, 'Please select a gender'),
  phone_number: z.string({
    required_error: 'Please enter a phone number',
  }),
  role: z.enum(['ADMIN', 'PROVIDER', 'CONSTRUCTOR', 'COMMERCIAL'], {
    required_error: 'Please select a role.',
  }),
});

const NewContact = () => {
  const [loading, setLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
      phone_number: '',
      role: 'COMMERCIAL',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const password = generateRandomPassword();
      const group = values.role !== 'ADMIN' ? 'COLLABORATORS' : 'ADMINS';
      await authService.registerContact({
        ...values,
        password,
        group,
        avatar_url:
          'https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg',
      });
      toast.success(
        'Contact created successfully :::: HERE IS THE PASSWORD: ' + password
      );
      form.reset();
      setLoading(false);
    } catch (err: String | any) {
      toast.error(err);
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className='px-4 py-4 max-w-2xl h-full flex flex-col '>
        <Card>
          <CardHeader className='flex py-3 pb-4 flex-row justify-between items-center'>
            <div>
              <CardTitle>Add a collaborator</CardTitle>
              <CardDescription>
                Collaborator account creation form.
              </CardDescription>
            </div>
            <Button disabled={loading} onClick={form.handleSubmit(onSubmit)}>
              {loading && <Loader className='mr-2 animate-spin' />}
              {!loading && <Save className='mr-2' />}
              Save
            </Button>
          </CardHeader>
        </Card>
        <div className='flex bg-zinc-400/10 border-l border-r border-b mb-4'>
          <ScrollArea className='gap-4 py-4 pb-6 w-full bg-accent '>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-3 w-full'
              >
                <FormField
                  control={form.control}
                  name='role'
                  render={({ field }) => (
                    <FormItem className='bg-white p-4 mx-6 bg-background border'>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className='flex flex-col space-y-1'
                        >
                          <FormItem className='flex items-center space-x-3 space-y-0'>
                            <FormControl>
                              <RadioGroupItem value='COMMERCIAL' />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              Commercial
                            </FormLabel>
                          </FormItem>
                          <FormItem className='flex items-center space-x-3 space-y-0'>
                            <FormControl>
                              <RadioGroupItem value='PROVIDER' />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              Provider
                            </FormLabel>
                          </FormItem>
                          <FormItem className='flex items-center space-x-3 space-y-0'>
                            <FormControl>
                              <RadioGroupItem value='CONSTRUCTOR' />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              Constructor
                            </FormLabel>
                          </FormItem>
                          <FormItem className='flex items-center space-x-3 space-y-0'>
                            <FormControl>
                              <RadioGroupItem value='ADMIN' />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              Administrator
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='first_name'
                  render={({ field }) => (
                    <FormItem className='mx-6'>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder='Enter the first name'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='last_name'
                  render={({ field }) => (
                    <FormItem className='mx-6'>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder='Enter the last name'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem className='mx-6'>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder='Enter email adress'
                          type='email'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='gender'
                  render={({ field }) => (
                    <FormItem className='mx-6'>
                      <FormLabel>Gender</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select gender' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='MAN'>Male</SelectItem>
                          <SelectItem value='WOMAN'>Female</SelectItem>
                          <SelectItem value='OTHER'>Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='phone_number'
                  render={({ field }) => (
                    <FormItem className='mx-6'>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder='Enter phone number'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </ScrollArea>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NewContact;
