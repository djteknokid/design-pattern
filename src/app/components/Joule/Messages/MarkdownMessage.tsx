"use client";

import React from 'react';

/**
 * MarkdownMessage - Rich text message component with markdown-style formatting
 * 
 * @description This component displays formatted text content with support for
 * headings, paragraphs, bold text, and structured content like lists.
 * 
 * @usage Use this component for:
 * - AI responses with rich formatting
 * - Documentation or help content
 * - Structured text with headings and lists
 * - Educational or informational content
 * 
 * @example
 * ```tsx
 * import { MarkdownMessage } from '@/components/Joule';
 * 
 * <MarkdownMessage
 *   title="Science"
 *   content={formattedContent}
 * />
 * ```
 */

interface MarkdownMessageProps {
  title?: string;
  content: string;
  maxWidth?: number;
}

const MarkdownMessage: React.FC<MarkdownMessageProps> = ({
  title,
  content,
  maxWidth = 384
}) => {
  return (
    <div 
      data-copy-code="false" 
      data-mode="Default" 
      data-state="Default" 
      data-type="Markdown" 
      style={{
        width: maxWidth, 
        maxWidth: maxWidth, 
        paddingTop: 13, 
        paddingBottom: 13, 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: 10, 
        display: 'inline-flex'
      }}
    >
      <div style={{
        alignSelf: 'stretch', 
        paddingLeft: 16, 
        paddingRight: 16, 
        paddingTop: 8, 
        paddingBottom: 8, 
        background: 'var(--sapAssistant_Answer_Background, #EFF1F2)', 
        overflow: 'hidden', 
        borderTopLeftRadius: 8, 
        borderTopRightRadius: 8, 
        borderBottomRightRadius: 8, 
        outline: '1px var(--sapAssistant_Answer_BorderColor, #EFF1F2) solid', 
        outlineOffset: '-1px', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        display: 'flex'
      }}>
        <div style={{alignSelf: 'stretch'}}>
          {title && (
            <>
              <span style={{
                color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
                fontSize: 24, 
                fontFamily: '72', 
                fontWeight: '700', 
                wordWrap: 'break-word'
              }}>
                {title}
              </span>
              <br/><br/>
            </>
          )}
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '400', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Science is a vast and ever-expanding field of knowledge that seeks to understand the natural world and the laws that govern it. From the smallest subatomic particles to the largest structures in the universe, science is constantly pushing the boundaries of our understanding.
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 14, 
            fontFamily: '72', 
            fontWeight: '400', 
            wordWrap: 'break-word'
          }}>
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 16, 
            fontFamily: '72', 
            fontWeight: '700', 
            wordWrap: 'break-word'
          }}>
            The Scientific Method: A Foundation for Knowledge
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 14, 
            fontFamily: '72', 
            fontWeight: '400', 
            wordWrap: 'break-word'
          }}>
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '400', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            At the heart of science is the scientific method, a systematic approach to gathering and analyzing evidence to support or refute hypotheses. The scientific method consists of several steps, including:
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '700', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Observation:
          </span>
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 14, 
            fontFamily: '72', 
            fontWeight: '400', 
            wordWrap: 'break-word'
          }}>
            {' '}
          </span>
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '400', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Making observations about the natural world
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '700', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Question:
          </span>
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 14, 
            fontFamily: '72', 
            fontWeight: '400', 
            wordWrap: 'break-word'
          }}>
            {' '}
          </span>
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '400', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Formulating a question based on those observations
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '700', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Hypothesis:
          </span>
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 14, 
            fontFamily: '72', 
            fontWeight: '700', 
            wordWrap: 'break-word'
          }}>
            {' '}
          </span>
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '400', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Proposing a testable explanation for the observed phenomena
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '700', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Prediction:
          </span>
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 14, 
            fontFamily: '72', 
            fontWeight: '400', 
            wordWrap: 'break-word'
          }}>
            {' '}
          </span>
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '400', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Making predictions based on the hypothesis
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '700', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Experiment:
          </span>
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 14, 
            fontFamily: '72', 
            fontWeight: '400', 
            wordWrap: 'break-word'
          }}>
            {' '}
          </span>
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '400', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Conducting experiments to test the hypothesis
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '700', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Analysis:
          </span>
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 14, 
            fontFamily: '72', 
            fontWeight: '400', 
            wordWrap: 'break-word'
          }}>
            {' '}
          </span>
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '400', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Analyzing the data collected during the experiment
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '700', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Conclusion:
          </span>
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 14, 
            fontFamily: '72', 
            fontWeight: '400', 
            wordWrap: 'break-word'
          }}>
            {' '}
          </span>
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '400', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Drawing conclusions based on the analysis This method provides a reliable way to test and refine our understanding of the natural world, and has led to countless discoveries and advances in science.
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 14, 
            fontFamily: '72', 
            fontWeight: '400', 
            wordWrap: 'break-word'
          }}>
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 16, 
            fontFamily: '72', 
            fontWeight: '700', 
            wordWrap: 'break-word'
          }}>
            Fields of Science
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '400', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Science is a broad field that encompasses many different areas of study. Here are just a few examples:
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 14, 
            fontFamily: '72', 
            fontWeight: '400', 
            wordWrap: 'break-word'
          }}>
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 14, 
            fontFamily: '72', 
            fontWeight: '700', 
            wordWrap: 'break-word'
          }}>
            Physics
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '400', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            <br/>
            Physics is the study of matter and energy, and how they interact with each other. It seeks to explain everything from the behavior of subatomic particles to the movement of planets and stars. Some of the key areas of physics include:
            <br/>
          </span>
          
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '700', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            Classical mechanics
          </span>
          <span style={{
            color: 'var(--sapAssistant_Answer_TextColor, #1D2D3E)', 
            fontSize: 12, 
            fontFamily: '72', 
            fontWeight: '400', 
            lineHeight: '18px', 
            wordWrap: 'break-word'
          }}>
            : Describing the motion of macroscopic objects
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarkdownMessage; 