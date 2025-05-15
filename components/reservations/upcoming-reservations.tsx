"use client"

// import { useEffect, useState } from "react"
// import { Clock, Users, ChevronDown, Info, Trash2 } from "lucide-react"
import { IDineInTable, IDineInTableBooking } from "@/libs/api"

export function UpcomingReservations({
  // bookings,
  // activeTab,
  // tables
}: Readonly<{
  bookings: IDineInTableBooking[]
  tables: IDineInTable[]
  activeTab: string
}>) {
  // const [reservations, setReservations] = useState<IFilterReservation[]>([])

  // useEffect(() => {
  //   if (!bookings || bookings.length === 0) {
  //     setReservations([]);
  //     return;
  //   }

  //   // Get current date and time
  //   const now = new Date();
    
  //   // Create today's date (start of day)
  //   const today = new Date(now);
  //   today.setHours(0, 0, 0, 0);
    
  //   // Create tomorrow's date (start of day)
  //   const tomorrow = new Date(today);
  //   tomorrow.setDate(tomorrow.getDate() + 1);
    
  //   // Create a date for the day after tomorrow
  //   const dayAfterTomorrow = new Date(today);
  //   dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

  //   // Create sets to track which bookings belong to which category
  //   const todayBookingIds = new Set<string>();
  //   const tomorrowBookingIds = new Set<string>();
  //   const futureBookingIds = new Set<string>();
    
  //   // First, categorize all bookings
  //   bookings.forEach(booking => {
  //     // Skip past bookings
  //     const bookingEndTime = new Date(booking.to_time);
  //     if (bookingEndTime <= now) {
  //       return;
  //     }
      
  //     // Get the booking date (start of day)
  //     const bookingStartDate = new Date(booking.from_time);
  //     const bookingStartDay = new Date(bookingStartDate);
  //     bookingStartDay.setHours(0, 0, 0, 0);
      
  //     const bookingDayTimestamp = bookingStartDay.getTime();
  //     const todayTimestamp = today.getTime();
  //     const tomorrowTimestamp = tomorrow.getTime();
      
  //     // Categorize based on date
  //     if (bookingDayTimestamp === todayTimestamp) {
  //       todayBookingIds.add(booking.id);
  //     } else if (bookingDayTimestamp === tomorrowTimestamp) {
  //       tomorrowBookingIds.add(booking.id);
  //     } else if (bookingDayTimestamp > tomorrowTimestamp) {
  //       futureBookingIds.add(booking.id);
  //     }
  //   });
    
  //   // Now filter bookings based on the active tab using our sets
  //   let filteredBookingIds: Set<string>;
    
  //   if (activeTab === "today") {
  //     filteredBookingIds = todayBookingIds;
  //   } else if (activeTab === "tomorrow") {
  //     filteredBookingIds = tomorrowBookingIds;
  //   } else if (activeTab === "future") {
  //     filteredBookingIds = futureBookingIds;
  //   } else {
  //     // Default: combine all sets for "all" tab
  //     filteredBookingIds = new Set([
  //       ...Array.from(todayBookingIds),
  //       ...Array.from(tomorrowBookingIds),
  //       ...Array.from(futureBookingIds)
  //     ]);
  //   }
    
  //   // Filter bookings using our set of IDs
  //   const filteredBookings = bookings.filter(booking => 
  //     filteredBookingIds.has(booking.id)
  //   );
    
  //   // Map filtered bookings to the IFilterReservation format
  //   const mappedReservations = filteredBookings.map(booking => {
  //     // Find the table for this booking
  //     const table = tables.find(t => t.id === booking.table_id);
      
  //     // Get booking start time
  //     const bookingTime = new Date(booking.from_time);
      
  //     // Format date
  //     const formattedDate = bookingTime.toLocaleDateString('en-IN', {
  //       year: 'numeric',
  //       month: 'short',
  //       day: 'numeric'
  //     });
      
  //     // Format time
  //     const formattedTime = bookingTime.toLocaleTimeString('en-IN', {
  //       hour: '2-digit',
  //       minute: '2-digit',
  //       hour12: true
  //     });
      
  //     return {
  //       id: booking.id,
  //       people: booking.number_of_people,
  //       time: formattedTime,
  //       date: formattedDate,
  //       assigned: !!table, // true if table exists
  //       table: table ? table.table_number : 'Not assigned',
  //       rawTime: bookingTime // Store the raw date for sorting
  //     };
  //   });
    
  //   // Sort reservations by time (earliest first)
  //   mappedReservations.sort((a, b) => a.rawTime.getTime() - b.rawTime.getTime());
    
  //   setReservations(mappedReservations);
  // }, [bookings, tables, activeTab]);

  // return (
  //   <div className="space-y-3 max-w-2xl">
  //     <div className="grid grid-cols-12 gap-4 px-2 text-sm text-gray-500">
  //       <div className="col-span-2">People</div>
  //       <div className="col-span-4">Reservation Time</div>
  //       <div className="col-span-6"></div>
  //     </div>

  //     {reservations.length === 0 ? (
  //       <div className="text-center py-8 text-gray-500">
  //         No reservations found for this period
  //       </div>
  //     ) : (
  //       reservations.map((reservation) => (
  //         <div key={reservation.id} className="grid grid-cols-12 gap-4 items-center bg-white border rounded-md p-3">
  //           <div className="col-span-2 text-gray-500 flex items-center">
  //             <Users size={16} className="mr-2 text-gray-500" />
  //             <span>{reservation.people}</span>
  //           </div>
  //           <div className="col-span-4 text-gray-500 flex items-center">
  //             <Clock size={16} className="mr-2 text-gray-500" />
  //             <div>
  //               <span className="block">{reservation.time}</span>
  //               <span className="text-xs text-gray-400">{reservation.date}</span>
  //             </div>
  //           </div>
  //           <div className="col-span-6 text-gray-800 flex justify-end space-x-2">
  //             {reservation.assigned ? (
  //               <div className="flex items-center bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md">
  //                 <span className="mr-1">Table:</span>
  //                 <span className="font-medium">{reservation.table}</span>
  //               </div>
  //             ) : (
  //               <div className="relative">
  //                 <button className="flex items-center bg-white border px-3 py-1.5 rounded-md text-gray-700">
  //                   <span className="mr-1">Assign Table</span>
  //                   <ChevronDown size={16} />
  //                 </button>
  //               </div>
  //             )}
  //             <button className="p-1.5 bg-gray-200 rounded-md text-gray-600 hover:bg-gray-300">
  //               <Info size={18} />
  //             </button>
  //             <button className="p-1.5 bg-gray-200 rounded-md text-gray-600 hover:bg-gray-300">
  //               <Trash2 size={18} />
  //             </button>
  //           </div>
  //         </div>
  //       ))
  //     )}
  //   </div>
  // )

  return (
    <div className="text-center py-8 text-gray-500">
      Comming Soon
    </div>
  )
}
