import { useForm } from "react-hook-form";
import './App.css'

function App() {
const { register, handleSubmit, watch, formState: { errors,isSubmitting } } = useForm();

async function submit(data){
   
      await new Promise((resolve)=>setTimeout(resolve,5000))
         console.log(data);
    }

  return (
 <form className="container" onSubmit={handleSubmit(submit)}>
<div >
    <label>FristName : </label>
    <input className={errors.firstname ? 'input-error':""}
     {...register('firstname'
      ,{required:true
      ,minLength:{value:2,message:'length is atleast 2'},
      maxLength:{value:6,message:'length is atmost 8'}})}/>

    {errors.firstname && <p className="input-line">{errors.firstname.message}</p>}
</div>
<br />
<div>
    <label>Last Name : </label>
    <input {...register('lastname'
      ,{required:true
      ,minLength:{value:2,message:'length is atleast 2'},
      maxLength:{value:6,message:'length is atmost 8'}})}/>

    {errors.firstname && <p className="input-line">{errors.firstname.message}</p>}
</div>

<br />

<div>
    <label>Enter Email :</label>
    <input {...register('Email')}/>
</div>

<br />

<input type="submit" disabled={isSubmitting}
value={isSubmitting ? "submiting" : "submit"}
/>
 </form>
  )
}

export default App
