import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, CreditCard, Receipt, TrendingUp } from 'lucide-react';

export default function FinancePage() {
  const financialStats = {
    totalRevenue: '₦12,450,000',
    monthlyFees: '₦3,250,000',
    outstanding: '₦450,000',
    expenses: '₦890,000',
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Financial Management</h1>
          <p className="text-neutral-400">Track fees, payments, and financial records.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Receipt className="h-4 w-4 mr-2" />
          Record Payment
        </Button>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-white">{financialStats.totalRevenue}</p>
                <p className="text-sm text-neutral-400">Total Revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-white">{financialStats.monthlyFees}</p>
                <p className="text-sm text-neutral-400">Monthly Fees</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-yellow-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-white">{financialStats.outstanding}</p>
                <p className="text-sm text-neutral-400">Outstanding</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <div className="flex items-center">
              <Receipt className="h-8 w-8 text-red-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-white">{financialStats.expenses}</p>
                <p className="text-sm text-neutral-400">Expenses</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-white">Fee Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start border-neutral-700 text-neutral-300">
              <CreditCard className="h-4 w-4 mr-2" />
              Collect School Fees
            </Button>
            <Button variant="outline" className="w-full justify-start border-neutral-700 text-neutral-300">
              <Receipt className="h-4 w-4 mr-2" />
              Generate Invoices
            </Button>
            <Button variant="outline" className="w-full justify-start border-neutral-700 text-neutral-300">
              <DollarSign className="h-4 w-4 mr-2" />
              Fee Structure Setup
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-white">Reports & Analytics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start border-neutral-700 text-neutral-300">
              <TrendingUp className="h-4 w-4 mr-2" />
              Financial Reports
            </Button>
            <Button variant="outline" className="w-full justify-start border-neutral-700 text-neutral-300">
              <Receipt className="h-4 w-4 mr-2" />
              Payment History
            </Button>
            <Button variant="outline" className="w-full justify-start border-neutral-700 text-neutral-300">
              <DollarSign className="h-4 w-4 mr-2" />
              Budget Planning
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}