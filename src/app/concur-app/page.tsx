'use client';

import { useState, useEffect } from 'react';
import { 
  ConcurApp, 
  ExpenseCategory, 
  ExpenseStatus, 
  ReportStatus,
  type User,
  type Expense,
  type ExpenseReport
} from '../../concur';
import AppHeader from '../../components/AppHeader';

// Initialize the Concur app
const concurApp = new ConcurApp();

export default function ConcurAppPage() {
  // State for the current user
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  // State for expenses
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newExpense, setNewExpense] = useState({
    amount: 0,
    category: ExpenseCategory.MEAL,
    description: '',
    receiptUrl: ''
  });
  
  // State for reports
  const [reports, setReports] = useState<ExpenseReport[]>([]);
  const [newReport, setNewReport] = useState({
    title: '',
    description: ''
  });
  
  // State for the selected report
  const [selectedReport, setSelectedReport] = useState<ExpenseReport | null>(null);
  
  // Create a default user on component mount
  useEffect(() => {
    const user = concurApp.createUser(
      'John Doe', 
      'john.doe@example.com', 
      'Engineering', 
      'Developer'
    );
    setCurrentUser(user);
  }, []);
  
  // Handle expense creation
  const handleCreateExpense = () => {
    if (!currentUser) return;
    
    const expense = concurApp.createExpense(
      currentUser.id,
      newExpense.amount,
      new Date(),
      newExpense.category as ExpenseCategory,
      newExpense.description,
      newExpense.receiptUrl || undefined
    );
    
    setExpenses([...expenses, expense]);
    setNewExpense({
      amount: 0,
      category: ExpenseCategory.MEAL,
      description: '',
      receiptUrl: ''
    });
  };
  
  // Handle report creation
  const handleCreateReport = () => {
    if (!currentUser) return;
    
    const report = concurApp.createReport(
      currentUser.id,
      newReport.title,
      newReport.description
    );
    
    setReports([...reports, report]);
    setNewReport({
      title: '',
      description: ''
    });
  };
  
  // Handle adding expense to report
  const handleAddExpenseToReport = (reportId: string, expenseId: string) => {
    const updatedReport = concurApp.addExpenseToReport(reportId, expenseId);
    if (updatedReport) {
      setReports(reports.map(r => r.id === reportId ? updatedReport : r));
      
      if (selectedReport && selectedReport.id === reportId) {
        setSelectedReport(updatedReport);
      }
    }
  };
  
  // Handle submitting a report
  const handleSubmitReport = (reportId: string) => {
    const updatedReport = concurApp.submitReport(reportId);
    if (updatedReport) {
      setReports(reports.map(r => r.id === reportId ? updatedReport : r));
      
      if (selectedReport && selectedReport.id === reportId) {
        setSelectedReport(updatedReport);
      }
    }
  };
  
  // Handle selecting a report
  const handleSelectReport = (report: ExpenseReport) => {
    setSelectedReport(report);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AppHeader />
      <div className="container mx-auto p-4 flex-grow">
      <h1 className="text-3xl font-bold my-6">Expense Management Dashboard</h1>
      
      {/* User Info */}
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Current User</h2>
        {currentUser ? (
          <div>
            <p><strong>Name:</strong> {currentUser.name}</p>
            <p><strong>Email:</strong> {currentUser.email}</p>
            <p><strong>Department:</strong> {currentUser.department}</p>
            <p><strong>Role:</strong> {currentUser.role}</p>
          </div>
        ) : (
          <p>Loading user...</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Expenses Section */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Expenses</h2>
          
          {/* Create Expense Form */}
          <div className="bg-gray-50 p-4 rounded mb-4">
            <h3 className="text-lg font-medium mb-2">Create New Expense</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Amount ($)</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newExpense.amount}
                  onChange={(e) => setNewExpense({...newExpense, amount: parseFloat(e.target.value)})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newExpense.category}
                  onChange={(e) => setNewExpense({...newExpense, category: e.target.value as ExpenseCategory})}
                >
                  {Object.values(ExpenseCategory).map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newExpense.description}
                  onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Receipt URL</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newExpense.receiptUrl}
                  onChange={(e) => setNewExpense({...newExpense, receiptUrl: e.target.value})}
                />
              </div>
              
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleCreateExpense}
              >
                Create Expense
              </button>
            </div>
          </div>
          
          {/* Expense List */}
          <div>
            <h3 className="text-lg font-medium mb-2">Your Expenses</h3>
            {expenses.length > 0 ? (
              <div className="space-y-2">
                {expenses.map((expense) => (
                  <div key={expense.id} className="border rounded p-3">
                    <p><strong>Amount:</strong> ${expense.amount.toFixed(2)}</p>
                    <p><strong>Category:</strong> {expense.category}</p>
                    <p><strong>Description:</strong> {expense.description}</p>
                    <p><strong>Status:</strong> {expense.status}</p>
                    <p><strong>Date:</strong> {expense.date.toLocaleDateString()}</p>
                    
                    {selectedReport && selectedReport.status === ReportStatus.DRAFT && (
                      <button
                        className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-sm"
                        onClick={() => handleAddExpenseToReport(selectedReport.id, expense.id)}
                      >
                        Add to Selected Report
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No expenses yet. Create one above.</p>
            )}
          </div>
        </div>
        
        {/* Reports Section */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Expense Reports</h2>
          
          {/* Create Report Form */}
          <div className="bg-gray-50 p-4 rounded mb-4">
            <h3 className="text-lg font-medium mb-2">Create New Report</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newReport.title}
                  onChange={(e) => setNewReport({...newReport, title: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newReport.description}
                  onChange={(e) => setNewReport({...newReport, description: e.target.value})}
                />
              </div>
              
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleCreateReport}
              >
                Create Report
              </button>
            </div>
          </div>
          
          {/* Report List */}
          <div>
            <h3 className="text-lg font-medium mb-2">Your Reports</h3>
            {reports.length > 0 ? (
              <div className="space-y-2">
                {reports.map((report) => (
                  <div 
                    key={report.id} 
                    className={`border rounded p-3 cursor-pointer ${selectedReport?.id === report.id ? 'border-blue-500 bg-blue-50' : ''}`}
                    onClick={() => handleSelectReport(report)}
                  >
                    <p><strong>Title:</strong> {report.title}</p>
                    <p><strong>Description:</strong> {report.description}</p>
                    <p><strong>Status:</strong> {report.status}</p>
                    <p><strong>Expenses:</strong> {report.expenses.length}</p>
                    
                    {report.status === ReportStatus.DRAFT && (
                      <button
                        className="mt-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSubmitReport(report.id);
                        }}
                      >
                        Submit Report
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No reports yet. Create one above.</p>
            )}
          </div>
          
          {/* Selected Report Details */}
          {selectedReport && (
            <div className="mt-6 bg-gray-50 p-4 rounded">
              <h3 className="text-lg font-medium mb-2">Selected Report Details</h3>
              <p><strong>Title:</strong> {selectedReport.title}</p>
              <p><strong>Description:</strong> {selectedReport.description}</p>
              <p><strong>Status:</strong> {selectedReport.status}</p>
              <p><strong>Submitted Date:</strong> {selectedReport.submittedDate.toLocaleDateString()}</p>
              
              <h4 className="text-md font-medium mt-4 mb-2">Expenses in this Report</h4>
              {selectedReport.expenses.length > 0 ? (
                <div className="space-y-2">
                  {selectedReport.expenses.map((expense) => (
                    <div key={expense.id} className="border rounded p-2 bg-white">
                      <p><strong>Amount:</strong> ${expense.amount.toFixed(2)}</p>
                      <p><strong>Category:</strong> {expense.category}</p>
                      <p><strong>Description:</strong> {expense.description}</p>
                    </div>
                  ))}
                  <p className="font-bold">
                    Total: ${selectedReport.expenses.reduce((sum, exp) => sum + exp.amount, 0).toFixed(2)}
                  </p>
                </div>
              ) : (
                <p className="text-gray-500">No expenses in this report yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
