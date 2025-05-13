<!-- ProgressBar.svelte - Clickable step progress indicator -->
<script>
    import { createEventDispatcher } from 'svelte';
    
    // Props
    export let steps = [];
    export let currentStep = 1;
    
    // Event dispatcher
    const dispatch = createEventDispatcher();
    
    // Function to handle step clicks
    function handleStepClick(stepId) {
      // Only allow clicking on steps that have been reached or previous steps
      if (stepId <= Math.max(currentStep, 1)) {
        dispatch('stepChange', { step: stepId });
      }
    }
</script>

<div class="progress-bar">
    {#each steps as step, index}
        <div class="step-item" class:active={currentStep >= step.id} class:current={currentStep === step.id}>
            <div class="step-line left" class:active={currentStep > step.id - 1}></div>
            <button 
                class="step-button" 
                class:active={currentStep >= step.id}
                class:clickable={step.id <= Math.max(currentStep, 1)}
                on:click={() => handleStepClick(step.id)}
            >
                <div class="step-circle">{step.id}</div>
                <div class="step-title">{step.title}</div>
            </button>
            {#if index < steps.length - 1}
                <div class="step-line right" class:active={currentStep > step.id}></div>
            {/if}
        </div>
    {/each}
</div>

<style>
    .progress-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 20px 0;
        margin-bottom: 40px;
        position: relative;
    }
    
    .step-item {
        display: flex;
        align-items: center;
        flex: 1;
        position: relative;
    }
    
    .step-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: none;
        background: none;
        cursor: default;
        padding: 0;
        position: relative;
        z-index: 2;
    }
    
    .step-button.clickable {
        cursor: pointer;
    }
    
    .step-circle {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        margin-bottom: 8px;
        transition: all 0.3s ease;
        color: #666;
        border: 2px solid #E0E0E0;
    }
    
    .step-button.active .step-circle {
        background-color: #1A73E8;
        color: white;
        border-color: #1A73E8;
    }
    
    .step-title {
        font-size: 14px;
        color: #666;
        margin-top: 4px;
        transition: color 0.3s ease;
        font-weight: 500;
    }
    
    .step-button.active .step-title {
        color: #1A73E8;
    }
    
    .step-line {
        height: 2px;
        background-color: #E0E0E0;
        flex-grow: 1;
        position: relative;
        z-index: 1;
        transition: background-color 0.3s ease;
    }

    .step-line.active {
        background-color: #1A73E8;
    }
    
    .step-line.left {
        margin-right: 8px;
    }
    
    .step-line.right {
        margin-left: 8px;
    }
    
    /* Hover effects for clickable steps */
    .step-button.clickable:hover .step-circle {
        transform: scale(1.05);
        box-shadow: 0 2px 8px rgba(26, 115, 232, 0.2);
    }
    
    /* Responsive styles */
    @media (max-width: 640px) {
        .progress-bar {
            padding: 16px 0;
            margin-bottom: 32px;
            overflow-x: auto;
        }
        
        .step-item {
            min-width: 100px;
        }
        
        .step-title {
            font-size: 12px;
        }
        
        .step-circle {
            width: 28px;
            height: 28px;
        }
    }
</style>