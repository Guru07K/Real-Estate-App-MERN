import {useSelector} from 'react-redux'

export default function Profile() {
    const {currentUser} = useSelector(state => state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>

      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar} className='rounded-full object-cover h-28 w-28 cursor-pointer self-center mt-2' alt="profile" />

        <input type="text" placeholder='Username' id='username' className='border p-3 rounded-lg' />
        <input type="email" placeholder='E-mail' id='email' className='border p-3 rounded-lg' />
        <input type="password" placeholder='Password' id='password' className='border p-3 rounded-lg' />

        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-85 disabled:opacity-80'>Update</button>

        <div className="flex justify-between mt-5">
          <span className='text-red-500 cursor-pointer'>Delete account</span>
          <span className='text-red-500 cursor-pointer'>sign out</span>
        </div>
      </form>

    </div>
  )
}
