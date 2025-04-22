const Header = () => {
  return (
    <header className='bg-gray-100 m-10 p-4 shadow-md'>
        <div className='flex justify-between items-center'>
          <div>MySite</div>
          <div className='hidden md:flex'>
            <ul className='flex gap-4'>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
            </ul>
          </div>

          <div class="md:hidden">
              <button className="text-2xl text-gray-500">&#9776;</button>
          </div>

        </div>
    </header>
  )
}

export default Header