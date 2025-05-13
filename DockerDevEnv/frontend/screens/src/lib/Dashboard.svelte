<script>
  import { onMount } from 'svelte';
  import Progress from './Progress.svelte';

  // Component data or state
  let searchQuery = '';
  let sidebarActive = false;
  let currentView = 'dashboard';
  
  // Mock function for search handling
  const handleSearch = (event) => {
    searchQuery = event.target.value;
    // Implement search functionality here
  };

  // Navigation handler
  const handleNavigation = (view) => {
    currentView = view;
  };

  // Mobile menu toggle functionality
  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
    sidebarActive = !sidebarActive;
  }
  
  // Add event listener after component is mounted
  onMount(() => {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    toggleButton.addEventListener('click', toggleSidebar);
    
    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
      const target = e.target instanceof HTMLElement ? e.target : null;
      if (sidebarActive && 
          target && 
          !target.closest('.sidebar') && 
          !target.closest('.mobile-menu-toggle')) {
        toggleSidebar();
      }
    });
    
    // Cleanup on destroy
    return () => {
      toggleButton.removeEventListener('click', toggleSidebar);
    };
  });
</script>

{#if currentView === 'dashboard'}
<main class="app-container">
  <!-- Black space on the left -->
  <div class="left-black-space"></div>

  <!-- Sidebar Navigation -->
  <aside class="sidebar">
    <div class="logo-container">
      <div class="logo">LOGO</div>
      <div class="company-name">COMPANY NAME</div>
    </div>
    
    <nav class="nav-menu">
      <ul>
        <li class="nav-item"><button class="nav-button active"><i class="icon">□</i> Inicio</button></li>
        <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Asignar Ruta</button></li>
        <li class="nav-item"><button class="nav-button"><i class="icon">□</i> Servicios externos</button></li>
        <li class="nav-item">
          <button class="nav-button" on:click={() => handleNavigation('progress')}>
            <i class="icon">□</i> Toma de servicios
          </button>
        </li>
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
        <span>DASHBOARD</span> / <span>TOMA DE SERVICIOS</span>
      </div>
    </header>

    <!-- Main Content Area -->
    <div class="content-area">
      <h1 class="page-title">TOMA DE SERVICIOS</h1>
      
      <div class="search-container">
        <div class="search-bar">
          <i class="search-icon">🔍</i>
          <input 
            type="text" 
            placeholder="Busqueda de servicios etc..." 
            bind:value={searchQuery}
            on:input={handleSearch}
          />
        </div>
      </div>
      
      <!-- Service list would go here -->
      <div class="service-list">
        <!-- Content will be populated based on search/filters -->
      </div>
    </div>
  </div>

  <!-- Mobile menu toggle button (visible on small screens) -->
  <button class="mobile-menu-toggle">
    <span class="menu-icon">☰</span>
  </button>
</main>
{:else if currentView === 'progress'}
  <Progress on:back={() => handleNavigation('dashboard')} />
{/if}

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

  /* Black space on the left */
  .left-black-space {
    width: 30px;
    background-color: #222;
    height: 100%;
    flex-shrink: 0;
    display: none; /* Hide the black space */
  }

  /* Sidebar Styles */
  .sidebar {
    width: 250px; /* Expand sidebar width */
    background-color: #ffffff;
    border-right: 1px solid #e0e0e0;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    z-index: 10;
    position: relative;
  }
  
  /* Custom scrollbar for sidebar to make it overlap the black space */
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

  /* Position the scrollbar to overlap with the black area */
  .sidebar {
    overflow-y: overlay; /* This makes the scrollbar overlay the content */
    margin-left: 0px; /* Move the scrollbar into the black space */
    padding-left: 0px; /* Add padding to compensate for the margin */
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
    align-items: center; /* Center children horizontally */
  }
  
  .page-title {
    margin-top: 0;
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    align-self: flex-start; /* Title aligned to the left */
    width: 100%;
  }
  
  /* Search Bar Styles - Centered */
  .search-container {
    margin-bottom: 20px;
    width: 100%;
    max-width: 600px; /* Limit width on larger screens */
    display: flex;
    justify-content: center;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 30px;
    padding: 10px 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin: auto;
    
  }
  
  .search-icon {
    margin-right: 10px;
    color: #777;
  }
  
  input[type="text"] {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;
    color: #333;
    background: transparent;
  }
  
  /* Service List Styles */
  .service-list {
    background-color: #ffffff;
    border-radius: 4px;
    min-height: 400px;
    width: 100%;
    flex: 1;
  }

  /* Mobile Menu Toggle - Hidden on desktop */
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
    .left-black-space {
      display: none;
    }
    
    .sidebar {
      position: fixed;
      left: -220px; /* Hidden by default */
      transition: left 0.3s ease;
      margin-left: 0;
      padding-left: 0;
    }
    
    .mobile-menu-toggle {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .content {
      margin-left: 0;
      width: 100%;
    }

    .search-container {
      max-width: 90%;
    }
  }

  /* Additional responsive adjustments */
  @media (min-width: 769px) and (max-width: 1024px) {
    .search-container {
      max-width: 80%;
    }
  }
</style>