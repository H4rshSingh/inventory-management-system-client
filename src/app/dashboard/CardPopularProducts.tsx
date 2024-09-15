import { useGetDashboardMetricsQuery } from '@/state/api'
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import Rating from '../(components)/Rating';

const CardPopularProducts = () => {
    const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

    return (
        <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16">
            {isLoading ? (
                <div className='m-5'>Loading...</div>
            ) : (
                <>
                    <h3 className='text-lg font-semibold px-7 pt-5 pb-2'>
                        Popular Products
                    </h3>
                    <hr />
                    <div className='overflow-auto h-full'>
                        {
                            dashboardMetrics?.popularProducts.map((product) => (
                                <div key={product.productId} className='flex items-center justify-between gap-3 px-5 py-7 border-b '>
                                    <div className='flex items-center gap-3'>
                                        <div className=''>
                                            Image
                                            {/* <Image src={product} alt={product.name} className='w-16 h-16 object-cover rounded-lg' /> */}
                                        </div>
                                        <div className='flex flex-col justify-between gap-1'>
                                            <h4 className='font-bold text-gray-700'>{product.name}</h4>
                                            <p className='flex items-center text-sm'>
                                                <span className='font-bold text-blue-500 text-xs'>Rs.{product.price}</span>
                                                <span className='mx-2'>|</span>
                                                <Rating rating={product.rating || 0} />
                                            </p>
                                        </div>
                                    </div>
                                    <div className='text-xs flex items-center'>
                                        <button className='text-blue-600 p-2  rounded-full bg-blue-100 mr-2'>
                                            <ShoppingBag className='w-4 h-4' />
                                        </button>
                                        {Math.round(product.stockQuantity / 1000)}k sold
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </>
            )}
        </div>
    )
}

export default CardPopularProducts