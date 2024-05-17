import logo from '../assets/images/logo.jpg'

const Navbar = () => {
    return (
      <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
        <div className='flex-1'>
          <div className='flex gap-2 items-center'>
            <img className='w-auto h-7 rounded-full' src={logo} alt='' />
            <span className='font-bold'>Art & crafts</span>
          </div>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <div>Home</div>
            </li>
            <li>
              <div>All Art & craft Items</div>
            </li>
            <li>
              <div>Add Craft Item</div>
            </li>
            <li>
              <div>Register</div>
            </li>
  
            <li>
              <div>Login</div>
            </li>
          </ul>
  
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full' title=''>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src=''
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
            
          
              <li className='mt-2'>
                <button className='bg-gray-200 block text-center'>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  export default Navbar