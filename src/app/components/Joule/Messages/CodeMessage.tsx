"use client";

import React from 'react';

/**
 * CodeMessage - Content message component with syntax-highlighted code
 * 
 * @description This component displays content with a description, syntax-highlighted code block,
 * and additional explanatory text. Perfect for educational content and code examples.
 * 
 * @usage Use this component for:
 * - Code tutorials and examples
 * - Programming education content
 * - API documentation with code samples
 * - Technical explanations with implementations
 * 
 * @example
 * ```tsx
 * import { CodeMessage } from '@/components/Joule';
 * 
 * <CodeMessage
 *   title="Expected Value Calculation"
 *   description="Expectation or expected value of any group of numbers..."
 *   code="// Java code example..."
 *   conclusion="For example, the expected value in rolling a six-sided die..."
 * />
 * ```
 */

interface CodeMessageProps {
  title?: string;
  description?: string;
  code?: string;
  conclusion?: string;
  maxWidth?: number;
}

const CodeMessage: React.FC<CodeMessageProps> = ({
  title = "Expected Value Calculation",
  description = "Expectation or expected value of any group of numbers in probability is the long-run average value of repetitions of the experiment it represents.",
  code = `// Java code to calculate expected
// value of an array
import java.io.*;

class GFG
{
    // Function to calculate expectation
    static float calc_Expectation(float a[], float n)
    {
        // Variable prb is for probability of each 
        // element which is same for each element 
        float prb = (1 / n);
    
       // calculating expectation overall
        float sum = 0;
        for (int i = 0; i < n; i++) 
            sum += a[i] * prb; 

      // returning expectation as sum
        return sum;
    }

  // Driver program
  public static void main(String args[])
    {
        float expect, n = 6f;
        float a[] = { 1f, 2f, 3f, 
                       4f, 5f, 6f };
        
        // Function for calculating expectation
        expect = calc_Expectation(a, n);
        
       // Display expectation of given array
        System.out.println("Expectation of array E(X) is : "
                           + expect);
    }
}`,
  conclusion = "For example, the expected value in rolling a six-sided die is 3.5, because the average of all the numbers that come up in an extremely large number of rolls is close to 3.5. Less roughly, the law of large numbers states that the arithmetic mean of the values almost surely converges to the expected value as the number of repetitions approaches infinity. The expected value is also known as the expectation, mathematical expectation, EV, or first moment. Given an array, the task is to calculate the expected value of the array.",
  maxWidth = 384
}) => {
  
  // Function to apply syntax highlighting to Java code
  const highlightJavaCode = (code: string) => {
    // Keywords to highlight
    const keywords = ['import', 'class', 'static', 'float', 'int', 'for', 'return', 'public', 'void', 'String'];
    const keywordColor = 'var(--Button-Attention-sapButton_Attention_TextColor, #B44F00)';
    const commentColor = 'var(--Interaction-sapContent_HelpColor, #188918)';
    const voidColor = 'var(--Semantic-sapWarningColor, #E76500)';
    
    let highlighted = code;
    
    // Highlight comments (lines starting with //)
    highlighted = highlighted.replace(/(\/\/.*?)(\n|$)/g, `<span style="color: ${commentColor}">$1</span>$2`);
    
    // Highlight keywords
    keywords.forEach(keyword => {
      if (keyword === 'void') {
        highlighted = highlighted.replace(new RegExp(`\\b${keyword}\\b`, 'g'), `<span style="color: ${voidColor}">${keyword}</span>`);
      } else {
        highlighted = highlighted.replace(new RegExp(`\\b${keyword}\\b`, 'g'), `<span style="color: ${keywordColor}">${keyword}</span>`);
      }
    });
    
    return highlighted;
  };

  return (
    <div 
      data-copy-code="false" 
      data-mode="Default" 
      data-state="Default" 
      data-type="Code" 
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
        display: 'inline-flex'
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
          {/* Title (if provided) */}
          {title && (
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
          )}
          
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
          
          {/* Code Block */}
          <div style={{
            alignSelf: 'stretch', 
            padding: 16, 
            background: 'white', 
            overflow: 'auto', 
            borderRadius: 4, 
            outline: '1px var(--Grays-Gray-4, #D1D1D6) solid', 
            outlineOffset: '-1px', 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: 10, 
            display: 'flex',
            maxHeight: '400px'
          }}>
            <div style={{
              width: 318,
              overflowX: 'auto'
            }}>
              <div 
                style={{
                  fontSize: 14,
                  fontFamily: '72',
                  fontWeight: '600',
                  wordWrap: 'break-word',
                  color: 'black',
                  lineHeight: '20px',
                  whiteSpace: 'pre-wrap'
                }}
                dangerouslySetInnerHTML={{ 
                  __html: highlightJavaCode(code) 
                }}
              />
            </div>
          </div>
          
          {/* Conclusion */}
          <div style={{
            alignSelf: 'stretch', 
            color: 'black', 
            fontSize: 16, 
            fontFamily: '72', 
            fontWeight: '400', 
            lineHeight: '24px', 
            wordWrap: 'break-word'
          }}>
            {conclusion}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeMessage; 