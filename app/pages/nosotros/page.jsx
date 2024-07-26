import React from 'react'
import Navbar from '../../_components/Navbar'

export default function page() {
  return (
    <>
    <Navbar />
    <div className='overflow-x-hidden'>
      {/* background */}
      <video src="/video1.mp4" loop autoPlay muted className='object-cover absolute h-screen w-screen -z-10 top-0 left-0'></video>

      {/* content */}
      <div className='px-72 text-black bg-black bg-opacity-75'>
        <img src="/mythicalLogo.png" className="mx-32 h-auto w-[75%]" alt="" />        
      </div>
    </div>

    <div className="w-full bg-zinc-900">
      <div className="relative py-6 sm:py-12 md:py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">About Us</h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                  We're on a mission to empower teams to innovate, collaborate, and ship the best code. Our platform
                  removes the complexity of managing infrastructure, so you can focus on what matters most: building the
                  next big thing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-start gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                Meet the brilliant minds behind the platform. Our team is dedicated to creating the best experience for
                our users, combining expertise in cloud computing, developer tools, and design.
              </p>
            </div>
            <div className="grid gap-4 md:gap-8 lg:gap-12">
              <div className="flex items-center space-x-4">
                <img
                  alt="Photo"
                  className="rounded-full overflow-hidden w-12 h-12 object-cover object-center"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div className="space-y-1">
                  <h3 className="text-xl text-white font-semibold">Alice Johnson</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-300">
                    VP of Engineering. Enthusiastic about creating scalable architectures and leading high-performing
                    teams.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  alt="Photo"
                  className="rounded-full overflow-hidden w-12 h-12 object-cover object-center"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div className="space-y-1">
                  <h3 className="text-xl text-white font-semibold">Mark Lee</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-300">
                    Head of Product. Passionate about creating user-friendly experiences and turning ideas into
                    features.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  alt="Photo"
                  className="rounded-full overflow-hidden w-12 h-12 object-cover object-center"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div className="space-y-1">
                  <h3 className="text-xl text-white font-semibold">Sophia Chen</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-300">
                    Security Lead. Committed to ensuring the platform is secure and resilient against cyber threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-start gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                We provide a platform that enables developers to build, test, and deploy web applications with ease. Our
                services include automated CI/CD, integrated testing, and collaboration tools.
              </p>
            </div>
            <div className="grid gap-4 md:gap-8 lg:gap-12">
              <div className="flex items-center space-x-4">
                <CheckCircleIcon className="w-6 h-6 text-gray-300" />
                <div className="space-y-1">
                  <h3 className="text-lg text-white font-semibold">Automated CI/CD Workflows</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-300">
                    Speed up development with automated pipelines for building, testing, and deploying code.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircleIcon className="w-6 h-6 text-gray-300" />
                <div className="space-y-1">
                  <h3 className="text-lg text-white font-semibold">Integrated Collaboration Tools</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-300">
                    Make collaboration seamless with built-in code review tools and team communication features.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircleIcon className="w-6 h-6 text-gray-300" />
                <div className="space-y-1">
                  <h3 className="text-lg text-white font-semibold">Scalable Deployments</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-300">
                    Deploy to the cloud with a single click and scale with ease to handle user traffic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
    
  )
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
