import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {

  const [dashData,setDashData] = useState(dashboardDummyData)
  return (
    <div>
      <Title align='left' font='outfit' title='Dashboard' subtitle='lorem fjen jfbj jbj rvbbvj  bbjj jbfjfmefjfjfk ufuebfue jkehfehfuhf 3uhfu3f3bu hfi33 fh3ihfi h3hf3jbuf3pei3 3hfifi3fn fj3fiohejkehfioejf' />
      <div className='flex gap-4 my-8'>
        {/* total booking */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src={assets.totalBookingIcon} className='max-sm:hidden h-10' alt="" />
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Bookings</p>
            <p className='text-neutral-400 text-base'>{dashData.totalBookings}</p>
          </div>
        </div>

        {/* total revenue */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src={assets.totalRevenueIcon} className='max-sm:hidden h-10' alt="" />
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Revenue</p>
            <p className='text-neutral-400 text-base'>${dashData.totalRevenue}</p>
          </div>
        </div>
      </div>

      {/* resent bookig */}
      <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
          <table className='w-full'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
                <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
                <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amoun</th>
                <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment Status</th>
              </tr>
            </thead>

            <tbody className='text-sm'>
                {dashData.bookings.map((item,index) => (
                  <tr key={index}>
                    <td className='p-3 text-gray-700 border-t border-gray-300'>
                      {item.user.username}
                    </td>
                    <td className='p-3 max-sm:hidden text-gray-700 border-t border-gray-300'>
                      {item.room.roomType}
                    </td>
                    <td className='p-3 text-center max-sm:hidden text-gray-700 border-t border-gray-300'>
                      ${item.totalPrice}
                    </td>
                    <td className='py-3 px-4 border-t border-gray-300 flex'>
                      <button className={`px-3 py-1 rounded-full mx-auto ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'}`}>
                        {item.isPaid ? 'Compileted' : 'Pending'}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default Dashboard