import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='flex justify-between items-center h-[70px] px-5 shadow-md bg-blue-800 text-white'>
        <h3 className='font-bold'>Github search</h3>
        <span className='text-xl'>
            <Link to="/" className='mr-8'>
                Home
            </Link>
            <Link to="/favs">
                Favourites
            </Link>
        </span>
    </nav>
  )
}

export default Navigation