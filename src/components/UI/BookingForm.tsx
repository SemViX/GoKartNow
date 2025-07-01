'use client'
import { TRACKS } from '@/utils/constants';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from './Button';
import axios from 'axios';

export interface IFormState{
    location: string;
    date: string;
    time:string;
    duration: 15 | 30 | 60;
    participants: number;
    name: string;
    email: string;
    number: number;
    comments?: string;
}


const BookingForm = () => {
    const {register, handleSubmit, reset} = useForm<IFormState>()

    const onSubmit = async (data:IFormState) => {
        try {
            const response = await axios.post('/api/booking', data);

            if (response.data.success) {
                toast.success('✅ Ваше бронювання надіслано!');
                reset();
            } else {
                toast.error('❌ Не вдалося надіслати форму.');
            }
            } catch (error) {
                console.error(error);
                toast.error('⚠️ Сталася помилка під час надсилання.');
            }}
    

  return (
    <form 
        className='flex flex-col gap-3 rounded-lg shadow-sm shadow-my-accent/80 p-5 mt-10 max-w-[900px] mx-auto'
        onSubmit={handleSubmit(onSubmit)}
    >
        <label className='flex flex-col gap-1'>
            Локація*
            <select 
                {...register("location", {required:true})} 
                className='rounded-lg bg-my-surface p-2 border-my-accent border'
            >
                {
                    TRACKS.map((item) => (
                        <option key={item.id} value={item.name}>{item.name}</option>
                    ))
                }
            </select>
        </label>
        <label className='flex flex-col gap-1'>
            Дата*
            <input 
                type="date" 
                {...register("date", {required:true})} 
                className='border border-my-accent p-2 bg-my-surface rounded-lg'
            />
        </label>
        <label className='flex flex-col gap-1'>
            Час*
            <input 
                type="time" 
                {...register("time", {required:true})} 
                className='border border-my-accent p-2 bg-my-surface rounded-lg'
            />
        </label>
        <label className='flex flex-col gap-1'>
            Тривалість*
            <select 
                {...register("duration", {required:true})} 
                className='border border-my-accent p-2 bg-my-surface rounded-lg'
            >
                <option>15</option>
                <option>30</option>
                <option>60</option>
            </select>
        </label>
        <label className='flex flex-col gap-1'>
            Кількість учасників*
            <input 
                type="number" 
                {...register("participants", {required:true})} 
                className='border border-my-accent p-2 bg-my-surface rounded-lg'    
            />
        </label>
        <label className='flex flex-col gap-1'>
            Ім&rsquo;я*
            <input 
                type="text" 
                {...register("name", {required:true})} 
                className='border border-my-accent p-2 bg-my-surface rounded-lg'
            />
        </label>
        <label className='flex flex-col gap-1'>
            Електронна адреса*
            <input 
                type="email" 
                {...register("email", {required:true})} 
                className='border border-my-accent p-2 bg-my-surface rounded-lg'
            />
        </label>
        <label className='flex flex-col gap-1'>
            Номер телефону*
            <input 
                type="number" 
                {...register("number", {required:true})} 
                className='border border-my-accent p-2 bg-my-surface rounded-lg'
            />
        </label>
        <label className='flex flex-col gap-1'>
            Коментар
            <textarea 
                {...register("comments")}
                className='border border-my-accent p-2 bg-my-surface rounded-lg'
            ></textarea>
        </label>
        <Button
            text='Відправити'
            type='submit'
            className='max-w-[200px] h-[50px] w-full mx-auto'
            style='primary'
        />
    </form>
  )
}

export default BookingForm