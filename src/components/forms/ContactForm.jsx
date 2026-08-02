import { useForm } from 'react-hook-form'
import { submitContact } from '../../services/contactService.js'

export default function ContactForm() {
  const { register, handleSubmit, reset, formState:{errors,isSubmitting} } = useForm()
  const onSubmit = async (data) => {
    await submitContact(data)
    reset()
    alert('Thanks! Your inquiry has been captured. Backend connection will be enabled later.')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-2xl border border-white/10 bg-slate-900 p-6">
      <input {...register('name',{required:true})} placeholder="Full Name" className="rounded-lg border border-white/10 bg-slate-950 p-3" />
      {errors.name && <small className="text-red-400">Name is required.</small>}
      <input {...register('email',{required:true})} type="email" placeholder="Email" className="rounded-lg border border-white/10 bg-slate-950 p-3" />
      <input {...register('phone')} placeholder="Phone" className="rounded-lg border border-white/10 bg-slate-950 p-3" />
      <input {...register('company')} placeholder="Company / Organization" className="rounded-lg border border-white/10 bg-slate-950 p-3" />
      <textarea {...register('requirements',{required:true})} rows="5" placeholder="Project Scope & Requirements" className="rounded-lg border border-white/10 bg-slate-950 p-3" />
      <button disabled={isSubmitting} className="rounded-lg bg-cyan-400 p-3 font-bold text-slate-950">{isSubmitting?'Sending...':'Send Inquiry'}</button>
    </form>
  )
}
