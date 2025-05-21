"use client"

import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Info } from "lucide-react"




interface OrdersTableProps {
  onViewOrderAction: (orderId: string) => void;
  searchTerm?: string;
}

export function OrdersTable({ onViewOrderAction, searchTerm = "" }: OrdersTableProps) {
  const allOrders = [
    {
      id: "#JVC30252K",
      date: "Jan 8, 2025",
      time: "13:24:32",
      customer: "sss Chaudary",
      email: "riyachaudary23@gmail.com",
      products: [
        {
          name: "Bluetooth Earphones-IP...",
          image: "/blu.svg?height=60&width=60&text=Earphones",
          count: 2,
        },
      ],
      status: "Delivered",
      total: "₹ 7,900 INR",
      paymentStatus: "Paid",
    },
    {
      id: "#JVC30252K",
      date: "Jan 8, 2025",
      time: "13:24:32",
      customer: "Riya Chaudary",
      email: "riyachaudary23@gmail.com",
      products: [
        {
          name: "Bluetooth Earphones-IP...",
          image: "/blu.svg?height=60&width=60&text=Earphones",
          count: 2,
        },
      ],
      status: "Delivered",
      total: "₹ 7,900 INR",
      paymentStatus: "Paid",
    },
    {
      id: "#JVC30252K",
      date: "Jan 8, 2025",
      time: "13:24:32",
      customer: "Riya Chaudary",
      email: "riyachaudary23@gmail.com",
      products: [
        {
          name: "Bluetooth Earphones-IP...",
          image: "/blu.svg?height=60&width=60&text=Earphones",
          count: 2,
        },
      ],
      status: "Delivered",
      total: "₹ 7,900 INR",
      paymentStatus: "Paid",
    },
    {
      id: "#JVC30252K",
      date: "Jan 8, 2025",
      time: "13:24:32",
      customer: "Riya Chaudary",
      email: "riyachaudary23@gmail.com",
      products: [
        {
          name: "Bluetooth Earphones-IP...",
          image: "/blu.svg?height=60&width=60&text=Earphones",
          count: 2,
        },
      ],
      status: "Delivered",
      total: "₹ 7,900 INR",
      paymentStatus: "Paid",
    },
    {
      id: "#JVC30252K",
      date: "Jan 8, 2025",
      time: "13:24:32",
      customer: "Riya Chaudary",
      email: "riyachaudary23@gmail.com",
      products: [
        {
          name: "Bluetooth Earphones-IP...",
          image: "/blu.svg?height=60&width=60&text=Earphones",
          count: 2,
        },
      ],
      status: "Delivered",
      total: "₹ 7,900 INR",
      paymentStatus: "Paid",
    },
    {
      id: "#JVC30252K",
      date: "Jan 8, 2025",
      time: "13:24:32",
      customer: "Riya Chaudary",
      email: "riyachaudary23@gmail.com",
      products: [
        {
          name: "Bluetooth Earphones-IP...",
          image: "/blu.svg?height=60&width=60&text=Earphones",
          count: 2,
        },
      ],
      status: "Delivered",
      total: "₹ 7,900 INR",
      paymentStatus: "Paid",
    },
    {
      id: "#JVC30252K",
      date: "Jan 8, 2025",
      time: "13:24:32",
      customer: "Riya Chaudary",
      email: "riyachaudary23@gmail.com",
      products: [
        {
          name: "Bluetooth Earphones-IP...",
          image: "/blu.svg?height=60&width=60&text=Earphones",
          count: 2,
        },
      ],
      status: "Delivered",
      total: "₹ 7,900 INR",
      paymentStatus: "Paid",
    },
    {
      id: "#JVC30252K",
      date: "Jan 8, 2025",
      time: "13:24:32",
      customer: "Riya Chaudary",
      email: "riyachaudary23@gmail.com",
      products: [
        {
          name: "Bluetooth Earphones-IP...",
          image: "/blu.svg?height=60&width=60&text=Earphones",
          count: 2,
        },
      ],
      status: "Delivered",
      total: "₹ 7,900 INR",
      paymentStatus: "Paid",
    },
    {
      id: "#JVC30252K",
      date: "Jan 8, 2025",
      time: "13:24:32",
      customer: "Riya Chaudary",
      email: "riyachaudary23@gmail.com",
      products: [
        {
          name: "Bluetooth Earphones-IP...",
          image: "/blu.svg?height=60&width=60&text=Earphones",
          count: 2,
        },
      ],
      status: "Delivered",
      total: "₹ 7,900 INR",
      paymentStatus: "Paid",
    },
    {
      id: "#JVC30252K",
      date: "Jan 8, 2025",
      time: "13:24:32",
      customer: "Riya Chaudary",
      email: "riyachaudary23@gmail.com",
      products: [
        {
          name: "Bluetooth Earphones-IP...",
          image: "/blu.svg?height=60&width=60&text=Earphones",
          count: 2,
        },
      ],
      status: "Delivered",
      total: "₹ 7,900 INR",
      paymentStatus: "Paid",
    },
  ]

  // Filter orders based on search term
  const filteredOrders = allOrders.filter(order => {
    if (!searchTerm) return true
    
    const searchLower = searchTerm.toLowerCase()
    return (
      order.id.toLowerCase().includes(searchLower) ||
      order.customer.toLowerCase().includes(searchLower) ||
      order.email.toLowerCase().includes(searchLower) ||
      order.products.some(product => product.name.toLowerCase().includes(searchLower)) ||
      order.status.toLowerCase().includes(searchLower) ||
      order.paymentStatus.toLowerCase().includes(searchLower)
    )
  })

  return (
    <div className="bg-white border rounded-md overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
            <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                <div className="flex items-center">
                    Products 
                    <div className="flex flex-col items-center -space-y-1.5">
                        <ChevronUp className="w-3 h-3 text-gray-400" />
                        <ChevronDown className="w-3 h-3 text-gray-400" />
                    </div>
                </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                <div className="flex items-center">
                    Order Status 
                    <div className="flex flex-col items-center -space-y-1.5">
                        <ChevronUp className="w-3 h-3 text-gray-400" />
                        <ChevronDown className="w-3 h-3 text-gray-400" />
                    </div>
                </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                <div className="flex items-center">
                    Payment Status 
                    <div className="flex flex-col items-center -space-y-1.5">
                        <ChevronUp className="w-3 h-3 text-gray-400" />
                        <ChevronDown className="w-3 h-3 text-gray-400" />
                    </div>
                </div>
                </th>
            </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {filteredOrders.map((order, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span className="text-gray-700 font-medium">{order.id}</span>
                  <button onClick={() => onViewOrderAction(order.id)} className="ml-1 text-gray-700 hover:text-gray-600">
                    <Info size={16} />
                  </button>
                </div>
                <div className="text-xs text-gray-700">
                  {order.date} <span className="text-gray-500">{order.time}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-700">{order.customer}</div>
                <div className="text-xs text-gray-700">{order.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0 mr-3">
                    <img
                      className="h-10 w-10 rounded-md object-cover"
                      src={order.products[0].image || "/blu.svg"}
                      alt={order.products[0].name}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">{order.products[0].name}</div>
                    <div className="text-xs text-orange-500">+{order.products[0].count} Products</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-3 py-1 inline-flex text-sm leading-5 font-medium rounded-md bg-green-600 text-white">
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.total}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-3 py-1 inline-flex text-sm leading-5 font-medium rounded-md bg-green-600 text-white">
                  {order.paymentStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="px-6 py-3 flex items-center justify-between border-t">
        <div className="text-sm text-gray-700">
          Showing {filteredOrders.length} {searchTerm ? 'filtered' : ''} of {allOrders.length} Results
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-700 mr-3">Page 1 of {Math.ceil(filteredOrders.length / 10)}</span>
          <div className="flex">
            <button className="px-2 py-1 border rounded-l-md bg-gray-100 text-gray-700">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="px-2 py-1 border-t border-b border-r rounded-r-md bg-gray-100 text-gray-700">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
