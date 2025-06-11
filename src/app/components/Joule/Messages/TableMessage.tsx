"use client";

import React from 'react';

/**
 * TableMessage - Content message component with table and description
 * 
 * @description This component displays content with a title, embedded table,
 * and descriptive text. Includes horizontal scrolling for wide tables.
 * 
 * @usage Use this component for:
 * - Data visualization responses
 * - Reports with data tables
 * - Content with structured data
 * - AI responses with tabular data presentation
 * 
 * @example
 * ```tsx
 * import { TableMessage } from '@/components/Joule';
 * 
 * <TableMessage
 *   title="Compensation"
 *   description="Data analysis description..."
 * />
 * ```
 */

interface TableMessageProps {
  title?: string;
  description?: string;
  maxWidth?: number;
}

const TableMessage: React.FC<TableMessageProps> = ({
  title = "Compensation",
  description = "This table shows compensation data across different departments and employee levels. The data includes base salary, bonuses, stock options, and total compensation packages. You can scroll horizontally to view all columns.",
  maxWidth = 384
}) => {
  // Generate sample table data
  const generateTableData = () => {
    const departments = ['Engineering', 'Sales', 'Marketing', 'Finance', 'HR', 'Operations', 'Design', 'Legal', 'Support', 'Data'];
    const positions = ['Manager', 'Senior', 'Lead', 'Principal', 'Director', 'VP', 'Associate', 'Specialist', 'Analyst', 'Coordinator'];
    
    return departments.map((dept, rowIndex) => ({
      department: dept,
      position: positions[rowIndex],
      baseSalary: `$${(80000 + Math.random() * 120000).toFixed(0)}`,
      bonus: `$${(5000 + Math.random() * 25000).toFixed(0)}`,
      stockOptions: `$${(10000 + Math.random() * 50000).toFixed(0)}`,
      totalComp: `$${(100000 + Math.random() * 200000).toFixed(0)}`,
      experience: `${Math.floor(2 + Math.random() * 15)} years`,
      location: ['SF', 'NYC', 'Austin', 'Seattle', 'Chicago', 'Boston', 'LA', 'Denver', 'Atlanta', 'Portland'][rowIndex],
      performance: ['Excellent', 'Good', 'Outstanding', 'Satisfactory', 'Excellent'][Math.floor(Math.random() * 5)],
      team: `Team ${String.fromCharCode(65 + rowIndex)}`
    }));
  };

  const tableData = generateTableData();
  const columnHeaders = [
    'Department', 'Position', 'Base Salary', 'Bonus', 'Stock Options', 
    'Total Comp', 'Experience', 'Location', 'Performance', 'Team'
  ];

  return (
    <div 
      data-copy-code="false" 
      data-mode="Default" 
      data-state="Default" 
      data-type="Table" 
      style={{
        width: maxWidth, 
        maxWidth: maxWidth, 
        paddingTop: 13, 
        paddingBottom: 13, 
        position: 'relative', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: 10, 
        display: 'inline-flex'
      }}
    >
      <div style={{
        alignSelf: 'stretch', 
        padding: 16, 
        background: 'var(--sapAssistant_Answer_Background, #EFF1F2)', 
        overflow: 'hidden', 
        borderTopLeftRadius: 8, 
        borderTopRightRadius: 8, 
        borderBottomRightRadius: 8, 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: 16, 
        display: 'flex'
      }}>
        <div style={{
          alignSelf: 'stretch', 
          background: '#EFF1F2', 
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'flex-start', 
          gap: 16, 
          display: 'flex'
        }}>
          {/* Title */}
          <div style={{
            alignSelf: 'stretch', 
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 16, 
            fontFamily: '72', 
            fontWeight: '700', 
            lineHeight: '30px', 
            wordWrap: 'break-word'
          }}>
            {title}
          </div>
          
          {/* Table Container */}
          <div style={{
            alignSelf: 'stretch', 
            padding: 16, 
            background: 'white', 
            overflow: 'auto', 
            borderRadius: 4, 
            outline: '1px var(--Grays-Gray-4, #D1D1D6) solid', 
            outlineOffset: '-1px', 
            maxHeight: '400px', // Auto height with max constraint
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              overflowX: 'auto',
              overflowY: 'auto',
              minWidth: '100%'
            }}>
              <table style={{
                width: '100%',
                minWidth: '800px', // Force horizontal scroll
                borderCollapse: 'collapse',
                fontSize: '14px',
                fontFamily: '72'
              }}>
                <thead>
                  <tr style={{
                    background: '#f8f9fa',
                    borderBottom: '2px solid #e9ecef'
                  }}>
                    {columnHeaders.map((header, index) => (
                      <th key={index} style={{
                        padding: '12px 8px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#1D2D3E',
                        borderRight: index < columnHeaders.length - 1 ? '1px solid #e9ecef' : 'none',
                        whiteSpace: 'nowrap',
                        minWidth: '80px'
                      }}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex} style={{
                      borderBottom: '1px solid #e9ecef',
                      background: rowIndex % 2 === 0 ? 'white' : '#fafbfc'
                    }}>
                      <td style={{
                        padding: '10px 8px',
                        borderRight: '1px solid #e9ecef',
                        fontWeight: '500',
                        color: '#1D2D3E'
                      }}>
                        {row.department}
                      </td>
                      <td style={{
                        padding: '10px 8px',
                        borderRight: '1px solid #e9ecef',
                        color: '#556B82'
                      }}>
                        {row.position}
                      </td>
                      <td style={{
                        padding: '10px 8px',
                        borderRight: '1px solid #e9ecef',
                        fontWeight: '500',
                        color: '#1D2D3E'
                      }}>
                        {row.baseSalary}
                      </td>
                      <td style={{
                        padding: '10px 8px',
                        borderRight: '1px solid #e9ecef',
                        color: '#556B82'
                      }}>
                        {row.bonus}
                      </td>
                      <td style={{
                        padding: '10px 8px',
                        borderRight: '1px solid #e9ecef',
                        color: '#556B82'
                      }}>
                        {row.stockOptions}
                      </td>
                      <td style={{
                        padding: '10px 8px',
                        borderRight: '1px solid #e9ecef',
                        fontWeight: '600',
                        color: '#5D36FF'
                      }}>
                        {row.totalComp}
                      </td>
                      <td style={{
                        padding: '10px 8px',
                        borderRight: '1px solid #e9ecef',
                        color: '#556B82'
                      }}>
                        {row.experience}
                      </td>
                      <td style={{
                        padding: '10px 8px',
                        borderRight: '1px solid #e9ecef',
                        color: '#556B82'
                      }}>
                        {row.location}
                      </td>
                      <td style={{
                        padding: '10px 8px',
                        borderRight: '1px solid #e9ecef',
                        color: row.performance === 'Outstanding' ? '#256F3A' : 
                              row.performance === 'Excellent' ? '#0064D9' : '#556B82'
                      }}>
                        {row.performance}
                      </td>
                      <td style={{
                        padding: '10px 8px',
                        color: '#556B82'
                      }}>
                        {row.team}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Description */}
          <div style={{
            alignSelf: 'stretch', 
            color: 'black', 
            fontSize: 16, 
            fontFamily: '72', 
            fontWeight: '400', 
            lineHeight: '24px', 
            wordWrap: 'break-word'
          }}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableMessage; 