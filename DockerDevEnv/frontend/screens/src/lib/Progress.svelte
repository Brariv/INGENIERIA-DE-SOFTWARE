<!-- Dashboard.svelte - Main dashboard layout -->
<script>
    import { onMount, createEventDispatcher } from 'svelte';
    import ProgressBar from './ProgressBar.svelte';
    import RemitentData from './steps/RemitentData.svelte';
    import Step2 from './steps/Step2.svelte';
    import Step3 from './steps/Step3.svelte';
    import Step4 from './steps/Step4.svelte';
    import Step5 from './steps/Step5.svelte';
  
    const dispatch = createEventDispatcher();
    
    // Component data or state
    let searchQuery = '';
    let sidebarActive = false;
    let currentStep = 1;
    
    // Steps information
    const steps = [
      { id: 1, title: 'Datos remitente' },
      { id: 2, title: 'Step 2' },
      { id: 3, title: 'Step 3' },
      { id: 4, title: 'Step 4' },
      { id: 5, title: 'Step 5' }
    ];
    
    // Mock function for search handling
    const handleSearch = (event) => {
      searchQuery = event.target.value;
      // Implement search functionality here
    };
  
    // Handle step change when progress bar is clicked
    const handleStepChange = (event) => {
      currentStep = event.detail.step;
    };
  
    // Navigate to next step
    const nextStep = () => {
      if (currentStep < steps.length) {
        currentStep++;
      }
    };
  
    // Navigate to previous step
    const prevStep = () => {
      if (currentStep > 1) {
        currentStep--;
      }
    };

    // Handle back to dashboard
    const handleBack = () => {
      dispatch('back');
    };
    
    // Mobile menu toggle functionality
    function toggleSidebar() {
      sidebarActive = !sidebarActive;
    }
    
    // Add event listener after component is mounted
    onMount(() => {
      // Close sidebar when clicking outside
      document.addEventListener('click', (e) => {
        const target = e.target instanceof HTMLElement ? e.target : null;
        if (sidebarActive && 
            target && 
            !target.closest('.sidebar') && 
            !target.closest('.mobile-menu-toggle')) {
          sidebarActive = false;
        }
      });
      
      // Cleanup on destroy
      return () => {
        document.removeEventListener('click', () => {});
      };
    });
  </script>
  
  <main class="app-container">
    <!-- Sidebar Navigation -->
    <aside class="sidebar" class:active={sidebarActive}>
      <div class="logo-container">
        <div class="logo">LOGO</div>
        <div class="company-name">COMPANY NAME</div>
      </div>
      
      <nav class="nav-menu">
        <ul>
          <li class="nav-item">
            <button class="nav-button" on:click={handleBack}>
              <i class="icon">←</i> Volver al Dashboard
            </button>
          </li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Inicio</button></li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Asignar Ruta</button></li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Servicios externos</button></li>
          <li class="nav-item"><button class="nav-button active"><i class="icon">□</i> Toma de servicios</button></li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Reenviar servicios</button></li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Confirmaciones</button></li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Servicios Temporales</button></li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Modificar servicios en seguimiento</button></li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Reasignar Servicio temporal</button></li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Consulta de servicios</button></li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Eliminar Temporales</button></li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Reasignar Ruta</button></li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Reasignar Servicios</button></li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Listado usuarios</button></li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Consultar beepers no enviados</button></li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Tokens</button></li>
          <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Reporte de tokens</button></li>
        </ul>
      </nav>
    </aside>
  
    <!-- Main Content -->
    <div class="content">
      <!-- Header -->
      <header class="header">
        <div class="breadcrumb">
          <span>DASHBOARD</span> / <span>BUSQUEDA</span>
        </div>
      </header>
  
      <!-- Main Content Area -->
      <div class="content-area">
        <h1 class="page-title">TOMA DE SERVICIOS</h1>
        
        <!-- Progress Bar Component -->
        <div class="progress-section">
          <ProgressBar {steps} {currentStep} on:stepChange={handleStepChange} />
        </div>
        
        <!-- Dynamic Step Content -->
        <div class="step-content">
          {#if currentStep === 1}
            <RemitentData on:next={nextStep} />
          {:else if currentStep === 2}
            <Step2 on:next={nextStep} on:prev={prevStep} />
          {:else if currentStep === 3}
            <Step3 on:next={nextStep} on:prev={prevStep} />
          {:else if currentStep === 4}
            <Step4 on:next={nextStep} on:prev={prevStep} />
          {:else if currentStep === 5}
            <Step5 on:prev={prevStep} />
          {/if}
        </div>
      </div>
    </div>
  
    <!-- Mobile menu toggle button (visible on small screens) -->
    <button class="mobile-menu-toggle" on:click={toggleSidebar}>
      <span class="menu-icon">☰</span>
    </button>
  </main>
  
  <style>
    /* Global Styles */
    :global(body, html) {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    
    :global(*, *:before, *:after) {
      box-sizing: inherit;
    }
    
    .app-container {
      display: flex;
      height: 100vh;
      width: 100vw;
      position: relative;
    }
  
    /* Sidebar Styles */
    .sidebar {
      width: 250px; 
      background-color: #ffffff;
      border-right: 1px solid #e0e0e0;
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow-y: auto;
      z-index: 10;
      position: relative;
    }
    
    /* Custom scrollbar for sidebar */
    .sidebar::-webkit-scrollbar {
      width: 12px;
    }
  
    .sidebar::-webkit-scrollbar-track {
      background: transparent;
    }
  
    .sidebar::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
      border: 3px solid white;
    }
    
    .logo-container {
      padding: 20px;
      text-align: center;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .logo {
      font-size: 18px;
      font-weight: bold;
      color: #777;
    }
    
    .company-name {
      font-size: 12px;
      color: #777;
    }
    
    .nav-menu {
      padding: 10px 0;
      flex: 1;
      overflow-y: auto;
    }
    
    .nav-menu ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    
    .nav-item {
      margin: 2px 0;
    }
    
    .nav-button {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 10px 15px;
      text-align: left;
      border: none;
      background: transparent;
      font-size: 13px;
      cursor: pointer;
      color: #555;
      transition: background-color 0.2s;
    }
    
    .nav-button:hover {
      background-color: #f0f0f0;
    }
    
    .nav-button.active {
      background-color: #0066ff;
      color: white;
    }
    
    .icon {
      margin-right: 10px;
      font-size: 14px;
    }
  
    /* Content Area Styles */
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: #f9f9f9;
      overflow: hidden;
    }
    
    .header {
      padding: 15px 20px;
      background-color: #ffffff;
      border-bottom: 1px solid #e0e0e0;
      text-align: right;
    }
    
    .breadcrumb {
      font-size: 12px;
      color: #777;
    }
    
    .content-area {
      padding: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }
    
    .page-title {
      margin-top: 0;
      margin-bottom: 30px;
      font-size: 18px;
      font-weight: bold;
      color: #333;
      align-self: flex-start;
      width: 100%;
    }
    
    /* Progress section */
    .progress-section {
      width: 100%;
      margin-bottom: 20px;
    }
    
    /* Step content */
    .step-content {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 20px;
      width: 100%;
      flex: 1;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
  
    /* Mobile Menu Toggle */
    .mobile-menu-toggle {
      display: none;
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 20;
      background-color: #0066ff;
      color: white;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 20px;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
  
    /* Responsive Styles */
    @media (max-width: 768px) {
      .sidebar {
        position: fixed;
        left: -250px;
        transition: left 0.3s ease;
      }
      
      .sidebar.active {
        left: 0;
      }
      
      .mobile-menu-toggle {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .content {
        width: 100%;
      }
    }
  </style>