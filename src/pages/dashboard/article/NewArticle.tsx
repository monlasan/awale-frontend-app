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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
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
import { Box, Loader, Save } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import articleService from '@/services/http/article.service';
import useSearchInventories from '@/hooks/requests/useSearchInventories';
import { uploadImg } from '@/lib/utils';

const formSchema = z.object({
  article_name: z.string().min(1, 'Please enter the article name'),
  description: z.string().min(1, 'Please enter a description'),
  price: z.string().min(1, 'Please enter the article price'),
  photo: z.any(),
  inventory_id: z.string({
    required_error: 'Please select an inventory for the article',
  }),
});

const NewArticle = () => {
  const { data, error: ErrorInventory, isLoading } = useSearchInventories();
  const [loading, setLoading] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      article_name: '',
      description: '',
      price: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const imageMetadata = await uploadImg({
        name: values.article_name + '-' + values.inventory_id,
        imageData: values.photo,
      });
      setImageUrl(imageMetadata.data.url);
    } catch (err: any) {
      toast.error('Something went wrong while saving the image!');
      setLoading(false);
      return;
    }
    try {
      console.log('SAVE THE ARTICLE ▶', {
        name: values.article_name,
        ...values,
      });
      await articleService.create({
        ...values,
        name: values.article_name,
        price: parseInt(values.price),
        photo_url: imageUrl.length > 0 ? imageUrl : null,
      });
      toast.success('Article created successfully');
      form.reset();
      setLoading(false);
    } catch (err: String | any) {
      toast.error(err);
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className='px-14 py-4 h-full flex flex-col max-w-2xl'>
        <Card>
          <CardHeader className='flex py-3 pb-4 flex-row justify-between items-center'>
            <div>
              <CardTitle>Add an article</CardTitle>
              <CardDescription>Article creation form.</CardDescription>
            </div>
            <Button disabled={loading} onClick={form.handleSubmit(onSubmit)}>
              {loading ? (
                <Loader className='mr-2 animate-spin' />
              ) : (
                <Save className='mr-2' />
              )}
              Add
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
                  name='article_name'
                  render={({ field }) => (
                    <FormItem className='mx-6'>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder='Enter the article name'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='photo'
                  render={({ field: { value, onChange, ...field } }) => (
                    <FormItem className='mx-6 p-3 border flex gap-4 bg-background'>
                      <div className='flex-1'>
                        <FormLabel>Photo</FormLabel>

                        <FormControl>
                          {/* <div className='w-full'>Pick an image</div> */}
                          <Input
                            disabled={loading}
                            type='file'
                            id='file'
                            className='file:text-primary mt-2'
                            onChange={(event) => {
                              onChange(
                                event.target.files && event.target.files[0]
                              );
                            }}
                            placeholder='Enter the article photo'
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <div className='w-24 text-xs h-24 flex justify-center items-center border bg-secondary border-dashed'>
                        {imageUrl.length > 0 ? (
                          <img src={imageUrl} className='w-full h-full' />
                        ) : (
                          <span>No image</span>
                        )}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='description'
                  render={({ field }) => (
                    <FormItem className='mx-6'>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='Enter a description'
                          className='resize-none'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='price'
                  render={({ field }) => (
                    <FormItem className='mx-6'>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder='Enter the price'
                          {...field}
                          type='number'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='inventory_id'
                  render={({ field }) => (
                    <FormItem className='mx-6'>
                      <FormLabel>Inventory</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Assign to an inventory' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {data?.map((inventory: any) => (
                            <SelectItem value={inventory.id} key={inventory.id}>
                              <span className='flex items-center'>
                                <Box size={21} className='mr-2 opacity-70' />
                                {inventory.name}
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        {!isLoading && ErrorInventory && (
                          <p className='text-destructive'>
                            Error fetching inventories
                          </p>
                        )}
                        Assign the article to an inventory
                      </FormDescription>
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

export default NewArticle;
