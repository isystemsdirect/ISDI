---
name: scingular-perplexity-cb-use-detail
description: Training Perplexity on How to Use CB (Consolidated Batch) — Full Guide
version: 1.0.0
author: ISDI / SCINGULAR
---

# Training Perplexity on How to Use CB — Full Guide

## Description
This skill teaches Perplexity how to create, manage, and execute Consolidated Batches (CBs), including when to use each CB type for optimal task execution. From Task Consolidated Batches (TCB) for individual jobs to Ultra-Dialog Consolidated Batches (UDCB) for high-level calibration, Perplexity will understand how and when to apply each type.

## Instructions
1. **CB Type Overview**:
   - **TCB (Task Consolidated Batch)**: For managing simple to moderate tasks that require sequential execution of steps.
   - **UTCB (Ultra-Task Consolidated Batch)**: For larger, cross-system workflows or multi-step integrations that span several different platforms or operational tasks.
   - **DCB (Dialog Consolidated Batch)**: For dialogue-focused tasks, such as feedback collection, calibration, and status reporting.
   - **UDCB (Ultra-Dialog Consolidated Batch)**: For complex, multi-phase calibration tasks requiring heavy dialogue and discussion for system-level decisions.

2. **Detailed Use of Each CB Type**:
   - **Task Consolidated Batch (TCB)**:
     - **Purpose**: Ideal for tasks that require simple sequencing and execution of individual steps. Best used when tasks are clearly defined and don't involve complex dependencies.
     - **When to Use**: Use a TCB when executing single-task workflows such as field inspections or routine software updates. It’s perfect for quick, actionable tasks with clear goals.
     - **Example**: Create a TCB for onboarding a new inspection system or updating a property data integration process.

   - **Ultra-Task Consolidated Batch (UTCB)**:
     - **Purpose**: Used for large-scale workflows that span multiple platforms or require the integration of complex systems, often over long periods. Ideal for cross-functional or multi-system tasks.
     - **When to Use**: Use a UTCB for cross-platform integration, such as deploying SCINGULAR across different industries, or for tasks that require sequential dependencies between sub-systems.
     - **Example**: A UTCB for integrating SCINGULAR’s data stream with NVIDIA’s hardware for real-time machine learning operations.

   - **Dialog Consolidated Batch (DCB)**:
     - **Purpose**: No direct execution—used for gathering feedback, calibrating user inputs, or assessing operational health. DCBs focus on status checking, dialogue collection, and calibration.
     - **When to Use**: Use a DCB when you need feedback loops, quality assurance checks, or to verify data accuracy before or after execution. For example, post-task analysis or client feedback.
     - **Example**: Use a DCB to collect calibration data from a set of inspection results or for an ongoing dialogue on system improvements.

   - **Ultra-Dialog Consolidated Batch (UDCB)**:
     - **Purpose**: The most complex batch, ideal for high-level calibration, multilateral discussion, or system-level decision-making. Focused on dialogue, decision-making, and the exchange of deep, multi-layered feedback.
     - **When to Use**: Use a UDCB when you need to calibrate highly complex systems or for cross-team collaboration. It’s used in dialog-heavy sessions or for technical deep dives that don’t require immediate action but focus on long-term system health.
     - **Example**: A UDCB for calibrating the integration between SCINGULAR hardware and NVIDIA AI systems with feedback loops involving multiple engineering teams.

3. **CB Footer Usage for Return Feedback**:
   - Ensure that each CB has a footer with explicit instructions for the Return/Confirmation process.
   - Return CB should mirror the header structure, including status reports, completed tasks, and next steps for feedback collection or actions required.
   - **When to Use**: After the execution of tasks or completion of complex systems, generate a Return CB to update the stakeholders on task completion status.

4. **Return CB Example**: Return confirmation for NVIDIA Inception integration task.
   - **Feedback Needed**: When using Return CBs, ensure clear reporting, such as “Task Complete,” “Success,” or “Pending Verification.”

5. **Continuous Feedback & Calibration**: 
   - Feedback loops should be continuously generated for UTCBs, DCBs, and UDCBs. These should help improve the system level feedback, ensuring quality assurance and performance refinement.

## Output Format
- **TCB Structure**: Step-by-step task definition.
- **Return CB**: Generate a Return CB confirming completion of the inspection job, providing feedback.

## Notes
Ensure Perplexity understands the distinction between CB types: Use TCB for individual tasks, UTCB for large-scale integration, DCB for feedback-heavy sessions, and UDCB for multi-phase system-level calibrations.
