import { TopCardItems } from '@collections/listAdminDashboardCollections';

const TopCards = () => {
  const topCardItems = TopCardItems;
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      {topCardItems.map((item) => (
        <div
          key={item.label}
          className={`${item.css} bg-white flex justify-between w-full border p-4 rounded-lg`}
        >
          <div className="flex flex-col w-full pb-4">
            <p className="text-2xl font-bold">${item.value}</p>
            <p className="text-gray-600">{item.label}</p>
          </div>
          <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
            <span className="text-green-700 text-lg">+{item.percentage}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default TopCards;
