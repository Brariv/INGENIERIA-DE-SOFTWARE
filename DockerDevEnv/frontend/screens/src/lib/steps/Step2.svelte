<!-- Step2.svelte - Step 2 Content -->
<script>
    import { createEventDispatcher } from 'svelte';
    
    // Form data
    let nombre = '';
    let direccion = '';
    let ciudad = '';
    
    // Event dispatcher
    const dispatch = createEventDispatcher();
    
    // Form submission handler
    function handleSubmit(event) {
      event.preventDefault();
      dispatch('next');
    }
    
    // Go back to previous step
    function goBack() {
      dispatch('prev');
    }
  </script>
  
  <div class="step2">
    <h2>Información del Destinatario</h2>
    
    <form on:submit={handleSubmit}>
      <div class="form-group">
        <label for="nombre">Nombre Completo</label>
        <input 
          type="text" 
          id="nombre" 
          bind:value={nombre} 
          placeholder="Ingrese nombre completo"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="direccion">Dirección</label>
        <input 
          type="text" 
          id="direccion" 
          bind:value={direccion} 
          placeholder="Ingrese dirección"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="ciudad">Ciudad</label>
        <input 
          type="text" 
          id="ciudad" 
          bind:value={ciudad} 
          placeholder="Ingrese ciudad"
          required
        />
      </div>
      
      <div class="button-group">
        <button type="button" class="btn btn-secondary" on:click={goBack}>Atrás</button>
        <button type="submit" class="btn btn-primary">Continuar</button>
      </div>
    </form>
  </div>
  
  <style>
    .step2 {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }
    
    h2 {
      color: #333;
      font-size: 18px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    label {
      display: block;
      margin-bottom: 5px;
      font-size: 14px;
      color: #555;
    }
    
    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.3s;
    }
    
    input:focus {
      border-color: #0066ff;
      outline: none;
    }
    
    .button-group {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-top: 30px;
    }
    
    .btn {
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
      border: none;
      transition: background-color 0.3s, transform 0.1s;
    }
    
    .btn:active {
      transform: translateY(1px);
    }
    
    .btn-primary {
      background-color: #0066ff;
      color: white;
    }
    
    .btn-primary:hover {
      background-color: #0055dd;
    }
    
    .btn-secondary {
      background-color: #f2f2f2;
      color: #333;
    }
    
    .btn-secondary:hover {
      background-color: #e0e0e0;
    }
  </style>