"use client"

import { useState } from "react"
import { Breadcrumb } from "@/components/breadcrumb"
import { OrdersTable } from "@/components/orders/orders-table"
import { OrderDetailsModal } from "@/components/orders/order-details-modal"
import { Search } from "lucide-react"

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showOrderDetails, setShowOrderDetails] = useState(false)
  const [selectedOrderId, setSelectedOrderId] = useState("")

  const handleViewOrder = (orderId: string) => {
    setSelectedOrderId(orderId)
    setShowOrderDetails(true)
  }

  return (
    <>
      <Breadcrumb items={["Convenience", "Orders"]} />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between">
            <div className="mb-6">
            <h1 className="text-xl font-medium text-gray-700">Orders</h1>
            <p className="text-sm text-gray-700">View & Manage all your orders at one place</p>
            </div>

            <div className="flex justify-between items-center   mb-6">
            <div className="relative w-72 ml-auto">
                <input
                type="text"
                placeholder="Search for a Product name"
                className="pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full text-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm">
                Filters
                </button>
            </div>
            </div>
        </div>

        <OrdersTable onViewOrderAction={handleViewOrder} searchTerm={searchTerm} />
      </main>

      {showOrderDetails && <OrderDetailsModal onCloseAction={() => setShowOrderDetails(false)} orderId={selectedOrderId} />}
    </>
  )
}
