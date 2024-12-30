function About() {
    return (
      <>
        <h1 className='text-6xl mb-4'>GitHub Finder</h1>
        <p className='mb-4 text-2xl font-light'>
          A React app to search GitHub profiles and view detailed profile information. 
          This project is built to demonstrate React concepts and showcase clean UI design.
        </p>
        <p className='text-lg text-gray-400'>
          Version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
          Designed and Developed By:
          <a className='text-white' href='https://twitter.com/your_twitter_handle'>
            Chirag Agrawal
          </a>
        </p>
      </>
    )
  }
  
  export default About
  