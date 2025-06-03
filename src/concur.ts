/**
 * Concur-like Expense Management Application
 * 
 * This file implements a simplified version of an expense management system
 * similar to Concur, allowing users to create, track, and manage expenses.
 */

// Interfaces
interface User {
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
}

interface Expense {
  id: string;
  userId: string;
  amount: number;
  date: Date;
  category: ExpenseCategory;
  description: string;
  receiptUrl?: string;
  status: ExpenseStatus;
  approvedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ExpenseReport {
  id: string;
  userId: string;
  title: string;
  description: string;
  expenses: Expense[];
  status: ReportStatus;
  submittedDate: Date;
  approvedDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Enums
enum ExpenseCategory {
  MEAL = 'Meal',
  TRAVEL = 'Travel',
  ACCOMMODATION = 'Accommodation',
  ENTERTAINMENT = 'Entertainment',
  OFFICE_SUPPLIES = 'Office Supplies',
  TRANSPORTATION = 'Transportation',
  OTHER = 'Other'
}

enum ExpenseStatus {
  DRAFT = 'Draft',
  SUBMITTED = 'Submitted',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
  REIMBURSED = 'Reimbursed'
}

enum ReportStatus {
  DRAFT = 'Draft',
  SUBMITTED = 'Submitted',
  UNDER_REVIEW = 'Under Review',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
  PAID = 'Paid'
}

// Helper function to generate unique IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

// User Management
class UserManager {
  private users: Map<string, User> = new Map();

  createUser(name: string, email: string, department: string, role: string): User {
    const id = generateId();
    const user: User = { id, name, email, department, role };
    this.users.set(id, user);
    return user;
  }

  getUser(id: string): User | undefined {
    return this.users.get(id);
  }

  updateUser(id: string, updates: Partial<User>): User | undefined {
    const user = this.users.get(id);
    if (!user) return undefined;
    
    const updatedUser = { ...user, ...updates };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  deleteUser(id: string): boolean {
    return this.users.delete(id);
  }

  getAllUsers(): User[] {
    return Array.from(this.users.values());
  }
}

// Expense Management
class ExpenseManager {
  private expenses: Map<string, Expense> = new Map();

  createExpense(
    userId: string,
    amount: number,
    date: Date,
    category: ExpenseCategory,
    description: string,
    receiptUrl?: string
  ): Expense {
    const id = generateId();
    const now = new Date();
    
    const expense: Expense = {
      id,
      userId,
      amount,
      date,
      category,
      description,
      receiptUrl,
      status: ExpenseStatus.DRAFT,
      createdAt: now,
      updatedAt: now
    };
    
    this.expenses.set(id, expense);
    return expense;
  }

  getExpense(id: string): Expense | undefined {
    return this.expenses.get(id);
  }

  updateExpense(id: string, updates: Partial<Expense>): Expense | undefined {
    const expense = this.expenses.get(id);
    if (!expense) return undefined;
    
    const updatedExpense = { 
      ...expense, 
      ...updates, 
      updatedAt: new Date() 
    };
    
    this.expenses.set(id, updatedExpense);
    return updatedExpense;
  }

  deleteExpense(id: string): boolean {
    return this.expenses.delete(id);
  }

  getUserExpenses(userId: string): Expense[] {
    return Array.from(this.expenses.values())
      .filter(expense => expense.userId === userId);
  }

  submitExpense(id: string): Expense | undefined {
    const expense = this.expenses.get(id);
    if (!expense) return undefined;
    
    const updatedExpense = { 
      ...expense, 
      status: ExpenseStatus.SUBMITTED,
      updatedAt: new Date() 
    };
    
    this.expenses.set(id, updatedExpense);
    return updatedExpense;
  }

  approveExpense(id: string, approverId: string): Expense | undefined {
    const expense = this.expenses.get(id);
    if (!expense) return undefined;
    
    const updatedExpense = { 
      ...expense, 
      status: ExpenseStatus.APPROVED,
      approvedBy: approverId,
      updatedAt: new Date() 
    };
    
    this.expenses.set(id, updatedExpense);
    return updatedExpense;
  }

  rejectExpense(id: string, approverId: string): Expense | undefined {
    const expense = this.expenses.get(id);
    if (!expense) return undefined;
    
    const updatedExpense = { 
      ...expense, 
      status: ExpenseStatus.REJECTED,
      approvedBy: approverId,
      updatedAt: new Date() 
    };
    
    this.expenses.set(id, updatedExpense);
    return updatedExpense;
  }
}

// Expense Report Management
class ExpenseReportManager {
  private reports: Map<string, ExpenseReport> = new Map();
  private expenseManager: ExpenseManager;

  constructor(expenseManager: ExpenseManager) {
    this.expenseManager = expenseManager;
  }

  createReport(userId: string, title: string, description: string): ExpenseReport {
    const id = generateId();
    const now = new Date();
    
    const report: ExpenseReport = {
      id,
      userId,
      title,
      description,
      expenses: [],
      status: ReportStatus.DRAFT,
      submittedDate: now,
      createdAt: now,
      updatedAt: now
    };
    
    this.reports.set(id, report);
    return report;
  }

  getReport(id: string): ExpenseReport | undefined {
    return this.reports.get(id);
  }

  updateReport(id: string, updates: Partial<ExpenseReport>): ExpenseReport | undefined {
    const report = this.reports.get(id);
    if (!report) return undefined;
    
    const updatedReport = { 
      ...report, 
      ...updates, 
      updatedAt: new Date() 
    };
    
    this.reports.set(id, updatedReport);
    return updatedReport;
  }

  deleteReport(id: string): boolean {
    return this.reports.delete(id);
  }

  getUserReports(userId: string): ExpenseReport[] {
    return Array.from(this.reports.values())
      .filter(report => report.userId === userId);
  }

  addExpenseToReport(reportId: string, expenseId: string): ExpenseReport | undefined {
    const report = this.reports.get(reportId);
    const expense = this.expenseManager.getExpense(expenseId);
    
    if (!report || !expense) return undefined;
    
    // Check if expense already exists in the report
    if (report.expenses.some(e => e.id === expenseId)) {
      return report;
    }
    
    const updatedReport = {
      ...report,
      expenses: [...report.expenses, expense],
      updatedAt: new Date()
    };
    
    this.reports.set(reportId, updatedReport);
    return updatedReport;
  }

  removeExpenseFromReport(reportId: string, expenseId: string): ExpenseReport | undefined {
    const report = this.reports.get(reportId);
    if (!report) return undefined;
    
    const updatedReport = {
      ...report,
      expenses: report.expenses.filter(e => e.id !== expenseId),
      updatedAt: new Date()
    };
    
    this.reports.set(reportId, updatedReport);
    return updatedReport;
  }

  submitReport(id: string): ExpenseReport | undefined {
    const report = this.reports.get(id);
    if (!report) return undefined;
    
    const updatedReport = { 
      ...report, 
      status: ReportStatus.SUBMITTED,
      submittedDate: new Date(),
      updatedAt: new Date() 
    };
    
    this.reports.set(id, updatedReport);
    return updatedReport;
  }

  approveReport(id: string): ExpenseReport | undefined {
    const report = this.reports.get(id);
    if (!report) return undefined;
    
    const updatedReport = { 
      ...report, 
      status: ReportStatus.APPROVED,
      approvedDate: new Date(),
      updatedAt: new Date() 
    };
    
    this.reports.set(id, updatedReport);
    return updatedReport;
  }

  rejectReport(id: string): ExpenseReport | undefined {
    const report = this.reports.get(id);
    if (!report) return undefined;
    
    const updatedReport = { 
      ...report, 
      status: ReportStatus.REJECTED,
      updatedAt: new Date() 
    };
    
    this.reports.set(id, updatedReport);
    return updatedReport;
  }

  markReportAsPaid(id: string): ExpenseReport | undefined {
    const report = this.reports.get(id);
    if (!report) return undefined;
    
    const updatedReport = { 
      ...report, 
      status: ReportStatus.PAID,
      updatedAt: new Date() 
    };
    
    this.reports.set(id, updatedReport);
    return updatedReport;
  }

  calculateReportTotal(id: string): number {
    const report = this.reports.get(id);
    if (!report) return 0;
    
    return report.expenses.reduce((total, expense) => total + expense.amount, 0);
  }
}

// Main Application
class ConcurApp {
  private userManager: UserManager;
  private expenseManager: ExpenseManager;
  private reportManager: ExpenseReportManager;

  constructor() {
    this.userManager = new UserManager();
    this.expenseManager = new ExpenseManager();
    this.reportManager = new ExpenseReportManager(this.expenseManager);
  }

  // User operations
  createUser(name: string, email: string, department: string, role: string): User {
    return this.userManager.createUser(name, email, department, role);
  }

  // Expense operations
  createExpense(
    userId: string,
    amount: number,
    date: Date,
    category: ExpenseCategory,
    description: string,
    receiptUrl?: string
  ): Expense {
    return this.expenseManager.createExpense(
      userId, amount, date, category, description, receiptUrl
    );
  }

  // Report operations
  createReport(userId: string, title: string, description: string): ExpenseReport {
    return this.reportManager.createReport(userId, title, description);
  }

  addExpenseToReport(reportId: string, expenseId: string): ExpenseReport | undefined {
    return this.reportManager.addExpenseToReport(reportId, expenseId);
  }

  submitReport(reportId: string): ExpenseReport | undefined {
    return this.reportManager.submitReport(reportId);
  }

  // Example workflow
  demonstrateWorkflow(): void {
    // Create a user
    const user = this.createUser(
      'John Doe', 
      'john.doe@example.com', 
      'Engineering', 
      'Developer'
    );
    console.log('User created:', user);

    // Create expenses
    const expense1 = this.createExpense(
      user.id,
      45.99,
      new Date(),
      ExpenseCategory.MEAL,
      'Lunch with client',
      'receipt1.jpg'
    );
    console.log('Expense 1 created:', expense1);

    const expense2 = this.createExpense(
      user.id,
      125.50,
      new Date(),
      ExpenseCategory.TRANSPORTATION,
      'Taxi to airport',
      'receipt2.jpg'
    );
    console.log('Expense 2 created:', expense2);

    // Create a report
    const report = this.createReport(
      user.id,
      'Business Trip - May 2025',
      'Expenses from client meeting in San Francisco'
    );
    console.log('Report created:', report);

    // Add expenses to report
    this.addExpenseToReport(report.id, expense1.id);
    this.addExpenseToReport(report.id, expense2.id);
    console.log('Expenses added to report');

    // Submit the report
    const submittedReport = this.submitReport(report.id);
    console.log('Report submitted:', submittedReport);

    // Calculate total
    const total = this.reportManager.calculateReportTotal(report.id);
    console.log(`Total report amount: $${total.toFixed(2)}`);
  }
}

// Export the application
export {
  ConcurApp,
  UserManager,
  ExpenseManager,
  ExpenseReportManager,
  ExpenseCategory,
  ExpenseStatus,
  ReportStatus,
  type User,
  type Expense,
  type ExpenseReport
};

// Example usage
// const app = new ConcurApp();
// app.demonstrateWorkflow();
