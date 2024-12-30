import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-base-300 text-neutral-content'>
      <div class="container mx-auto">
        <div class="flex-none px-2 mx-2">
          <FaGithub class="inline pr-2 text-3xl"/>
          <Link to='/' className='text-lg font-bold align-middle'>
          {title}
          </Link>
        </div>

        <div class="flex-1 px-2 mx-2">

          <div class="flex justify-end">

            <Link to='/' class="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>

            <Link to='/about' class="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>

          </div>

        </div>


      </div>

      
    </nav>
  )
}

export default Navbar