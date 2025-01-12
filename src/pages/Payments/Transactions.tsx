import React from 'react';
import { Search, ArrowUpRight, ArrowDownLeft, Wallet, RefreshCw } from 'lucide-react';
import PaymentCard from './components/PaymentCard';

const mockTransactions = [
  {
    id: 1,
    member: 'John Doe',
    type: 'Membership',
    amount: 49.99,
    status: 'Completed',
    date: '2024-03-15',
  },
  {
    id: 2,
    member: 'Jane Smith',
    type: 'Personal Training',
    amount: 75.00,
    status: 'Pending',
    date: '2024-03-15',
  },
];

const Transactions = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Transactions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <PaymentCard
          title="Total Revenue"
          amount="$12,426"
          change={8.2}
          icon={<Wallet className="w-6 h-6 text-white" />}
        />
        <PaymentCard
          title="Incoming"
          amount="$6,738"
          change={12.5}
          icon={<ArrowDownLeft className="w-6 h-6 text-white" />}
        />
        <PaymentCard
          title="Outgoing"
          amount="$2,105"
          change={-2.4}
          icon={<ArrowUpRight className="w-6 h-6 text-white" />}
        />
        <PaymentCard
          title="Pending"
          amount="$1,832"
          change={5.8}
          icon={<RefreshCw className="w-6 h-6 text-white" />}
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search transactions..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
              <option value="">All Types</option>
              <option value="membership">Membership</option>
              <option value="training">Personal Training</option>
              <option value="products">Products</option>
            </select>
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
              <option value="">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Member
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{transaction.member}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${transaction.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;