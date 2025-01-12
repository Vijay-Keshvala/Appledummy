import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <div className='screen-max-width'>
      <div>
        <p className='font-semibold text-gray text-sm'>
            More ways to shop: {''}
            <span className='underline text-blue'>
                Find an apple store {''}
            </span>
            or {''}
            <span className='underline text-blue'>
                other retailer
            </span>{''}
            near you
        </p>
        <p className='font-semibold text-gray text-sm'>
            Or call 635588-9599
        </p>
      </div>
      <div className='bg-neutral-700 my-5 h-[1px] w-full'/>
      <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Apple Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Footer