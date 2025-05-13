<!-- Step3.svelte - Step 3 Content -->
<script>
    import { createEventDispatcher } from 'svelte';
    
    // Form data
    let tipoServicio = '';
    let descripcion = '';
    let peso = '';
    let urgente = false;
    
    // Options for dropdown
    const tiposServicio = [
      'Entrega Estándar',
      'Entrega Express',
      'Entrega Nocturna',
      'Entrega Fin de Semana'
    ];
    
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
  
  <div class="step3">
    <h2>Detalles del Servicio</h2>
    
    <form on:submit={handleSubmit}>
      <div class="form-group">
        <label for="tipoServicio">Tipo de Servicio</label>
        <select 
          id="tipoServicio" 
          bind:value={tipoServicio} 
          required
        >
          <option value="" disabled selected>Seleccione tipo de servicio</option>
          {#each tiposServicio as tipo}
            <option value={tipo}>{tipo}</option>
          {/each}
        </select>
      </div>
      
      <div class="form-group">
        <label for="descripcion">Descripción del paquete</label>
        <textarea 
          id="descripcion" 
          bind:value={descripcion} 
          placeholder="Describa el contenido del paquete"
          rows="3"
          required
        ></textarea>
      </div>
      
      <div class="form-group">
        <label for="peso">Peso aproximado (kg)</label>
        <input 
          type="number" 
          id="peso" 
          bind:value={peso} 
          placeholder="Ingrese el peso"
          min="0.1"
          step="0.1"
          required
        />
      </div>
      
      <div class="form-group checkbox-group">
        <label class="checkbox-label">
          <input type="checkbox" bind:checked={urgente}>
          <span>Servicio Urgente</span>
        </label>
      </div>
      
      <div class="button-group">
        <button type="button" class="btn btn-secondary" on:click={goBack}>Atrás</button>
        <button type="submit" class="btn btn-primary">Continuar</button>
      </div>
    </form>
  </div>
  
  <style>
    .step3 {
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
    
    select, input, textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.3s;
    }
    
    select:focus, input:focus, textarea:focus {
      border-color: #0066ff;
      outline: none;
    }
    
    .checkbox-group {
      margin-top: 15px;
    }
    
    .checkbox-label {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    
    .checkbox-label input {
      width: auto;
      margin-right: 8px;
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