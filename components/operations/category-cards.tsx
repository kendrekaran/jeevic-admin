export function CategoryCards(
  {
    tabs,
  }: Readonly<{
    tabs: ICategoryData[];
  }>
) {
    if (!tabs) {
        return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex items-center justify-center w-16 h-16 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin">
              Loading...
            </div>
          </div>
        );
    }
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {tabs.map((category, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg cursor-pointer group">
            <img
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-end p-3">
              <h3 className="text-white font-bold text-lg">{category.name}</h3>
              <div className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-xs absolute top-3 right-3">
                {category.count}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  