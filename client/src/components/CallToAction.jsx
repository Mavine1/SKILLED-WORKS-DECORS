import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <>
      <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to dive deeper into God's Word?
            </h2>
            <p className='text-gray-500 my-2'>
            Explore the Bible with these online resources
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.biblegateway.com" target='_blank' rel='noopener noreferrer'>
                Read the Bible Online
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bible study" 
            className="rounded-3xl w-full h-auto object-cover max-w-md"/>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            Fuel Your Faith Journey
            </h2>
            <p className='text-gray-500 my-2'>
            Discover wisdom in Scripture and uplifting Christian literature
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.infobooks.org/free-pdf-books/self-improvement/motivation/" target='_blank' rel='noopener noreferrer'>
                Find Inspiring Reads
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://images.unsplash.com/photo-1543616991-75a2c125ff5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bible study" 
            className="rounded-3xl w-full h-auto object-cover max-w-md"/>
        </div>
      </div>
    </>
  )
}