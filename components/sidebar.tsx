"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import {
  LayoutGrid,
  // Package,
  // Tag,
  Clock,
  Settings,
  // Mail,
  // MessageSquare,
  // Users,
  CalendarDays,
  // Ticket,
  ChevronLeft,
  ChevronRight,
  LogOut
} from "lucide-react"

export function Sidebar() {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  const handleLogout = () => {
    // Clear the access token from localStorage
    localStorage.removeItem('access_token')
    // Redirect to login page
    router.push('/login')
  }

  return (
    <div className={`${collapsed ? 'w-20' : 'w-60'} h-screen bg-white  border-r flex flex-col transition-all duration-300`}>
      <div className={`${collapsed ? 'justify-center' : 'pl-4'} p-4 border-b flex items-center`}>
        {!collapsed && <img src="/logo1.svg" alt="" />}
        <button 
          onClick={toggleSidebar} 
          className={`${collapsed ? 'ml-0' : 'ml-auto'} p-1 text-black bg-gray-100 rounded-full hover:bg-gray-100`}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        {/* <div className="py-4">
          {!collapsed && (
            <div className="px-4 py-2">
              <p className="text-xs text-gray-400 font-medium">CONVENIENCE</p>
            </div>
          )}
          <NavItem href="/oveview" icon={<LayoutGrid size={18} />} label="Overview" collapsed={collapsed} />
          <NavItem href="/inventory" icon={<Package size={18} />} label="Inventory" collapsed={collapsed} />
          <NavItem href="/promotions" icon={<Tag size={18} />} label="Promotions & Sales" collapsed={collapsed} />
        </div> */}

        <div className="py-4">
          {!collapsed && (
            <div className="px-4 py-2">
              <p className="text-xs text-gray-400 font-medium ">CAFE</p>
            </div>
          )}
          <NavItem href="/" icon={<LayoutGrid size={18} />} label="Overview" collapsed={collapsed} />
          <NavItem href="/real-time" icon={<Clock size={18} />} label="Real-Time view" collapsed={collapsed} />
          <NavItem href="/table-reservations" icon={<CalendarDays size={18} />} label="Table Reservations" collapsed={collapsed} />
          <NavItem href="/operations" icon={<Settings size={18} />} label="Operations" collapsed={collapsed} />
        </div>

        {/* <div className="py-4">
          {!collapsed && (
            <div className="px-4 py-2">
              <p className="text-xs text-gray-400 font-medium">MARKETING</p>
            </div>
          )}
          <NavItem href="/promotional-mail" icon={<Mail size={18} />} label="Promotional Mail" collapsed={collapsed} />
          <NavItem href="#" icon={<MessageSquare size={18} />} label="Promotional Mesasge" collapsed={collapsed} />
          <NavItem href="/coupon-codes" icon={<Ticket size={18} />} label="Coupon Codes" collapsed={collapsed} />
        </div>

        <div className="py-4">
          {!collapsed && (
            <div className="px-4 py-2">
              <p className="text-xs text-gray-400 font-medium">OTHERS</p>
            </div>
          )}
          <NavItem href="/staff" icon={<Users size={18} />} label="Staff Management" collapsed={collapsed} />
        </div> */}
      </div>

      <div className={`p-4 border-t ${collapsed ? 'flex flex-col items-center' : ''}`}>
        {!collapsed ? (
          <div className="flex flex-col">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
                <img src="/placeholder.svg?height=40&width=40" alt="User avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Jeevan</p>
                <p className="text-xs text-gray-500">admin@jeevic.com</p>
              </div>
            </div>
            <button 
              onClick={handleLogout} 
              className="flex items-center text-sm cursor-pointer text-gray-700 hover:text-orange-500 transition-colors"
            >
              <LogOut size={16} className="mr-2" />
              Logout
            </button>
          </div>
        ) : (
          <>
            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mb-3">
              <img src="/placeholder.svg?height=40&width=40" alt="User avatar" className="w-full h-full object-cover" />
            </div>
            <button 
              onClick={handleLogout} 
              className="text-gray-700 hover:text-orange-500 transition-colors" 
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}

function NavItem({ href, icon, label, collapsed }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href && href !== "#"

  return (
    <Link
      href={href}
      className={`flex items-center ${collapsed ? 'justify-center' : 'px-4'} py-2 text-sm ${isActive ? "bg-orange-500 text-white font-medium" : "text-gray-800 hover:bg-gray-100"}`}
      title={collapsed ? label : undefined}
    >
      <span className={collapsed ? '' : 'mr-3'}>{icon}</span>
      {!collapsed && label}
    </Link>
  )
}
