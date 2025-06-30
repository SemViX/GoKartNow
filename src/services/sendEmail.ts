import { IFormState } from '@/components/UI/BookingForm'
import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendUserData(data:IFormState) {
    const { location, date, time, duration, participants, name, number, comments } = data;

    const html = `
    <h2>Нове бронювання з GoKartNow 🚗💨</h2>
    <p><strong>Ім’я:</strong> ${name}</p>
    <p><strong>Контакт:</strong> ${number}</p>
    <p><strong>Локація:</strong> ${location}</p>
    <p><strong>Дата:</strong> ${date}</p>
    <p><strong>Час:</strong> ${time}</p>
    <p><strong>Тривалість:</strong> ${duration} хв</p>
    <p><strong>Кількість учасників:</strong> ${participants}</p>
    ${comments ? `<p><strong>Коментар:</strong> ${comments}</p>` : ''}
  `;

  const result = await resend.emails.send({
    from: 'GoKartNow <onboarding@resend.dev>',
    to: 'vitalsem.1973@gmail.com', 
    subject: 'Нове бронювання з сайту',
    html,
  });

  return result;  

}