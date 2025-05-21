"use client"

import {  useEffect, useRef } from "react"
import { X,  ExternalLink, AlertTriangle, Info } from 'lucide-react'

interface OrderDetailsModalProps {
  onCloseAction: () => void
  orderId: string
}

export function OrderDetailsModal({ onCloseAction}: OrderDetailsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onCloseAction()
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onCloseAction])
  return (
    <div className="fixed inset-0 bg-[#F8F8F8]/80 bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div ref={modalRef} className="bg-white rounded-lg w-full max-w-md border border-[#e5e5e5] shadow-lg">
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 rounded-full overflow-hidden mr-3">
              <img
                src="https://i.pinimg.com/736x/c7/c0/cc/c7c0cc9b58f449eec0a092a2acda4231.jpg?height=48&width=48&text=RK"
                alt="Customer"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-medium text-gray-700">Rajendra Kumar</h2>
              <p className="text-sm text-gray-700">rajendrakumar417@gmail.com</p>
            </div>
            <button onClick={onCloseAction} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>

          <div className="border border-[#e5e5e5] rounded-lg p-4 mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Order items</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-md overflow-hidden mr-3">
                  <img
                    src="/blu.svg?height=48&width=48&text=BT"
                    alt="Product"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">Bluetooth Earphones Wireless</p>
                  <p className="text-sm text-orange-500">₹ 1,900 INR</p>
                </div>
                <div className="text-sm text-gray-700">× 2</div>
              </div>
              <div className="border-t border-[#e5e5e5] pt-4 flex items-center">
                <div className="h-12 w-12 rounded-md overflow-hidden mr-3">
                  <img
                    src="/ear.png?height=48&width=48&text=BT"
                    alt="Product"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">Bluetooth Earphones Wireless</p>
                  <p className="text-sm text-orange-500">₹ 1,900 INR</p>
                </div>
                <div className="text-sm text-gray-700">× 2</div>
              </div>
            </div>
          </div>

          <div className="flex mb-4">
            <div className="flex items-center border px-2 py-1 rounded-md border-gray-300 mr-4">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm text-green-600">Shipped</span>
            </div>
            <div className="flex items-center  border px-2 py-1 rounded-md border-gray-300">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              <span className="text-sm text-orange-500">Payment Pending</span>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Sub - Total</span>
              <span className="font-medium text-gray-700">₹ 3,800 INR</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Coupons Discount</span>
              <span className="font-medium text-gray-700">₹ 0 INR</span>
            </div>
            <div className="flex justify-between bg-gray-800 text-white p-2 rounded">
              <span className="font-medium">Grand Total</span>
              <span className="font-medium">₹ 3,800 INR</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-1 flex items-center">
                 Shipping Address
              </h3>
              <p className="text-sm text-gray-700">
                22-123, near Avenue Mart, Kempogowda, Coimbatore, Tamil Nadu - 437152
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-1 flex items-center">
                 Billing Address
              </h3>
              <p className="text-sm text-gray-700 flex items-center gap-1">
                <Info className="text-gray-700 h-4 w-4"/>
                Same as shipping Address
              </p>
            </div>
          </div>

          <div className="flex space-x-3">
            <button className="flex-1 py-2 border border-orange-500 rounded text-sm text-orange-500 hover:bg-orange-50 flex items-center justify-center">
              <ExternalLink size={14} className="mr-1" /> Track Order
            </button>
            <button className="flex-1 py-2 border bg-gray-100 rounded text-sm text-gray-800 hover:bg-gray-50 flex items-center justify-center">
               Refund Amount
            </button>
            <button className="flex-1 py-2 border border-red-500 rounded text-sm text-red-500 hover:bg-red-50 flex items-center justify-center">
              <AlertTriangle size={14} className="mr-1" /> Cancel Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
