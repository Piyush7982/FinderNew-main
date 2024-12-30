import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero'>
        <div class="text-center hero-content">
            <div class="max-w-lg">
                <h1 class="text-8xl font-bold mb-8">
                    Oops!
                </h1>
                <p class="text-5xl mb-8">404 - Page not found!</p>
                <Link class="btn btn-primary btn-lg">
                    <FaHome className='mr-2' size={30}/>
                    Back To Home
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default NotFound
