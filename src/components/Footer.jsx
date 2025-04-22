const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white mt-10 p-4'>
        <div className='container text-center max-w-xl mx-auto'>
            <p className='mt-4'>
            © 2025 My React App
            </p>
            <div className='p-4'>
                <ul className='flex justify-center space-x-4'>
                    <li>Twitter</li>
                    <li>Github</li>
                    <li>Youtube</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer