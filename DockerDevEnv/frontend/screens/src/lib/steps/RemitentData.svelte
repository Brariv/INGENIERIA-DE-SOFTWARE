<!-- RemitentData.svelte - Step 1: Remitent Data Form -->
<script>
    import { createEventDispatcher } from 'svelte';
    
    // Form data
    let telefono = '';
    let nit = '';
    
    // Event dispatcher
    const dispatch = createEventDispatcher();
    
    // Form submission handler
    function handleSubmit(event) {
      event.preventDefault();
      dispatch('next');
    }
  </script>
  
  <div class="remitent-data">
    <h2>Datos del remitente</h2>
    
    <form on:submit={handleSubmit}>
      <div class="form-group">
        <label for="telefono">Teléfono</label>
        <input 
          type="tel" 
          id="telefono" 
          bind:value={telefono} 
          placeholder="Ingrese su teléfono"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="nit">NIT</label>
        <input 
          type="text" 
          id="nit" 
          bind:value={nit} 
          placeholder="Ingrese su NIT"
          required
        />
      </div>
      
      <div class="button-group">
        <button type="button" class="btn btn-secondary">Button 2</button>
        <button type="submit" class="btn btn-primary">Button 1</button>
      </div>
    </form>
  </div>
  
  <style>
    .remitent-data {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      background: #fff;
      border-radius: 8px;
    }
    
    h2 {
      color: #1E1E1E;
      font-size: 24px;
      margin-bottom: 32px;
      font-weight: 600;
    }
    
    .form-group {
      margin-bottom: 24px;
    }
    
    label {
      display: block;
      margin-bottom: 8px;
      font-size: 14px;
      color: #666;
      font-weight: 500;
    }
    
    input {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #E0E0E0;
      border-radius: 4px;
      font-size: 16px;
      color: #333;
      background: #fff;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    
    input::placeholder {
      color: #999;
    }
    
    input:focus {
      border-color: #1A73E8;
      outline: none;
      box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);
    }
    
    .button-group {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 32px;
    }
    
    .btn {
      padding: 10px 24px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      border: none;
      transition: background-color 0.2s, transform 0.1s;
    }
    
    .btn:active {
      transform: translateY(1px);
    }
    
    .btn-primary {
      background-color: #1A73E8;
      color: white;
    }
    
    .btn-primary:hover {
      background-color: #1557B0;
    }
    
    .btn-secondary {
      background-color: #F8F9FA;
      color: #1A73E8;
      border: 1px solid #DADCE0;
    }
    
    .btn-secondary:hover {
      background-color: #F1F3F4;
      border-color: #D2E3FC;
    }

    @media (max-width: 640px) {
      .remitent-data {
        padding: 1.5rem;
      }
      
      h2 {
        font-size: 20px;
        margin-bottom: 24px;
      }
      
      .button-group {
        flex-direction: row;
        margin-top: 24px;
      }
      
      .btn {
        padding: 8px 16px;
      }
    }
  </style>