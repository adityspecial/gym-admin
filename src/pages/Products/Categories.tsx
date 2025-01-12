import React from 'react';
import { Plus, Package, Search } from 'lucide-react';

const mockCategories = [
  {
    id: 1,
    name: 'Supplements',
    products: 45,
    description: 'Protein powders, vitamins, and supplements',
  },
  {
    id: 2,
    name: 'Accessories',
    products: 32,
    description: 'Gym bags, water bottles, and workout accessories',
  },
];

const Categories = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Product Categories</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600">
          <Plus className="w-5 h-5 mr-2" />
          Add Category
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search categories..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {mockCategories.map((category) => (
            <div key={category.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                </div>
                <Package className="w-6 h-6 text-blue-500" />
              </div>
              <div className="mt-4">
                <span className="text-sm text-gray-600">
                  {category.products} products in this category
                </span>
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <button className="text-sm text-blue-600 hover:text-blue-800">Edit</button>
                <button className="text-sm text-red-600 hover:text-red-800">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;