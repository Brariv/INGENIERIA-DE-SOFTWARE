<!-- Step4.svelte - Step 4 Content -->
<script>
    import { createEventDispatcher } from 'svelte';
    
    // Form data
    let metodoPago = '';
    let facturacion = '';
    let referencia = '';
    
    // Options for payment methods
    const metodosPago = [
      'Efectivo',
      'Tarjeta de Crédito',
      'Tarjeta de Débito',
      'Transferencia Bancaria',
      'Pago contra entrega'
    ];
    
    const tiposFacturacion = [
      'Factura Electrónica',
      'Factura Física',
      'Sin Factura'
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
  
  <div class="step4">
    <h2>Información de Pago</h2>
    
    <form on:submit={handleSubmit}>
      <div class="form-group">
        <label for="metodoPago">Método de Pago</label>
        <select 
          id="metodoPago" 
          bind:value={metodoPago} 
          required
        >
          <option value="" disabled selected>Seleccione método de pago</option>
          {#each metodosPago as metodo}
            <option value={metodo}>{metodo}</option>
          {/each}
        </select>
      </div>
      
      <div class="form-group">
        <label for="facturacion">Tipo de Facturación</label>
        <select 
          id="facturacion" 
          bind:value={facturacion} 
          required
        >
          <option value="" disabled selected>Seleccione tipo de facturación</option>
          {#each tiposFacturacion as tipo}
            <option value={tipo}>{tipo}</option>
          {/each}
        </select>
      </div>
      
      <div class="form-group">
        <label for="referencia">Referencia de Pago</label>
        <input 
          type="text" 
          id="referencia" 
          bind:value={referencia} 
          placeholder="Ej: Número de orden, código de referencia"
        />
      </div>
      
      <div class="payment-summary">
        <h3>Resumen de Costos</h3>
        <div class="summary-row">
          <span>Costo de Servicio:</span>
          <span>$45.00</span>
        </div>
        <div class="summary-row">
          <span>Impuestos:</span>
          <span>$8.10</span>
        </div>
        <div class="summary-row total">
          <span>Total:</span>
          <span>$53.10</span>
        </div>
      </div>
      
      <div class="button-group">
        <button type="button" class="btn btn-secondary" on:click={goBack}>Atrás</button>
        <button type="submit" class="btn btn-primary">Continuar</button>
      </div>
    </form>
  </div>
  
  <style>
    .step4 {
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
    
    h3 {
      color: #444;
      font-size: 16px;
      margin: 20px 0 15px;
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
    
    select, input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.3s;
    }
    
    select:focus, input:focus {
      border-color: #0066ff;
      outline: none;
    }
    
    .payment-summary {
      background-color: #f9f9f9;
      padding: 15px;
      border-radius: 4px;
      margin: 25px 0;
      border: 1px solid #eee;
    }
    
    .summary-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 14px;
      padding: 5px 0;
    }
    
    .summary-row.total {
      border-top: 1px solid #ddd;
      margin-top: 10px;
      padding-top: 10px;
      font-weight: bold;
      font-size: 16px;
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