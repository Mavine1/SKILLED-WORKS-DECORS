import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Read More</h1>
      <p className='text-md text-gray-500'>Dive deeper into God's Word and discover more inspiring content in our latest posts!</p>
      <CallToAction />
    </div>
  )
}