<!-- Step5.svelte - Final step with confirmation -->
<script>
    import { createEventDispatcher } from 'svelte';
    
    // Order confirmation details - in a real app, this would come from a store or props
    // These are mock values for demonstration
    const confirmationDetails = {
      orderNumber: 'ORD-2025-05742',
      trackingCode: 'TRK-9518-5689-7254',
      remitente: {
        telefono: '555-123-4567',
        nit: '12345678'
      },
      destinatario: {
        nombre: 'Ana Martínez',
        direccion: 'Calle Principal 123, Apto 502',
        ciudad: 'Ciudad de México'
      },
      servicio: {
        tipo: 'Entrega Express',
        descripcion: 'Documentos importantes en sobre sellado',
        peso: '0.5 kg',
        urgente: 'Sí'
      },
      pago: {
        metodo: 'Tarjeta de Crédito',
        facturacion: 'Factura Electrónica',
        total: '$53.10'
      },
      fechaEstimada: '9 mayo, 2025'
    };
    
    // Event dispatcher
    const dispatch = createEventDispatcher();
    
    // Go back to previous step
    function goBack() {
      dispatch('prev');
    }
    
    // Function to handle print
    function handlePrint() {
      window.print();
    }
    
    // Function to finish the process
    function finishProcess() {
      // Here we could redirect to dashboard or reset the form
      window.location.href = '/dashboard';
    }
  </script>
  
  <div class="step5">
    <div class="confirmation-header">
      <span class="check-icon">✓</span>
      <h2>¡Servicio Registrado Exitosamente!</h2>
      <p class="confirmation-message">
        Su solicitud de servicio ha sido registrada correctamente en nuestro sistema.
      </p>
    </div>
    
    <div class="confirmation-details">
      <div class="confirmation-section">
        <h3>Detalles de la Orden</h3>
        <div class="detail-row">
          <span class="label">Número de Orden:</span>
          <span class="value">{confirmationDetails.orderNumber}</span>
        </div>
        <div class="detail-row">
          <span class="label">Código de Seguimiento:</span>
          <span class="value tracking-code">{confirmationDetails.trackingCode}</span>
        </div>
        <div class="detail-row">
          <span class="label">Fecha Estimada de Entrega:</span>
          <span class="value">{confirmationDetails.fechaEstimada}</span>
        </div>
      </div>
      
      <div class="confirmation-grid">
        <div class="confirmation-section">
          <h3>Datos del Remitente</h3>
          <div class="detail-row">
            <span class="label">Teléfono:</span>
            <span class="value">{confirmationDetails.remitente.telefono}</span>
          </div>
          <div class="detail-row">
            <span class="label">NIT:</span>
            <span class="value">{confirmationDetails.remitente.nit}</span>
          </div>
        </div>
        
        <div class="confirmation-section">
          <h3>Datos del Destinatario</h3>
          <div class="detail-row">
            <span class="label">Nombre:</span>
            <span class="value">{confirmationDetails.destinatario.nombre}</span>
          </div>
          <div class="detail-row">
            <span class="label">Dirección:</span>
            <span class="value">{confirmationDetails.destinatario.direccion}</span>
          </div>
          <div class="detail-row">
            <span class="label">Ciudad:</span>
            <span class="value">{confirmationDetails.destinatario.ciudad}</span>
          </div>
        </div>
      </div>
      
      <div class="confirmation-grid">
        <div class="confirmation-section">
          <h3>Detalles del Servicio</h3>
          <div class="detail-row">
            <span class="label">Tipo:</span>
            <span class="value">{confirmationDetails.servicio.tipo}</span>
          </div>
          <div class="detail-row">
            <span class="label">Descripción:</span>
            <span class="value">{confirmationDetails.servicio.descripcion}</span>
          </div>
          <div class="detail-row">
            <span class="label">Peso:</span>
            <span class="value">{confirmationDetails.servicio.peso}</span>
          </div>
          <div class="detail-row">
            <span class="label">Urgente:</span>
            <span class="value">{confirmationDetails.servicio.urgente}</span>
          </div>
        </div>
        
        <div class="confirmation-section">
          <h3>Información de Pago</h3>
          <div class="detail-row">
            <span class="label">Método:</span>
            <span class="value">{confirmationDetails.pago.metodo}</span>
          </div>
          <div class="detail-row">
            <span class="label">Facturación:</span>
            <span class="value">{confirmationDetails.pago.facturacion}</span>
          </div>
          <div class="detail-row">
            <span class="label">Total:</span>
            <span class="value total">{confirmationDetails.pago.total}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="button-group">
      <button type="button" class="btn btn-secondary" on:click={goBack}>Atrás</button>
      <div class="right-buttons">
        <button type="button" class="btn btn-outline" on:click={handlePrint}>
          <span class="icon">🖨️</span> Imprimir
        </button>
        <button type="button" class="btn btn-primary" on:click={finishProcess}>
          Finalizar
        </button>
      </div>
    </div>
  </div>
  
  <style>
    .step5 {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .confirmation-header {
      text-align: center;
      margin-bottom: 30px;
    }
    
    .check-icon {
      display: inline-block;
      width: 60px;
      height: 60px;
      background-color: #4CAF50;
      color: white;
      border-radius: 50%;
      font-size: 30px;
      line-height: 60px;
      margin-bottom: 15px;
    }
    
    h2 {
      color: #333;
      font-size: 22px;
      margin-bottom: 10px;
    }
    
    .confirmation-message {
      color: #666;
      font-size: 16px;
    }
    
    .confirmation-details {
      background-color: #f9f9f9;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 30px;
      border: 1px solid #eee;
    }
    
    .confirmation-section {
      margin-bottom: 20px;
    }
    
    h3 {
      color: #444;
      font-size: 16px;
      margin: 0 0 15px;
      padding-bottom: 8px;
      border-bottom: 1px solid #ddd;
    }
    
    .detail-row {
      display: flex;
      margin-bottom: 8px;
      font-size: 14px;
    }
    
    .label {
      width: 40%;
      color: #666;
      font-weight: 500;
    }
    
    .value {
      width: 60%;
      color: #333;
    }
    
    .tracking-code {
      font-weight: bold;
      color: #0066ff;
    }
    
    .total {
      font-weight: bold;
    }
    
    .confirmation-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
    }
    
    .button-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;
    }
    
    .right-buttons {
      display: flex;
      gap: 10px;
    }
    
    .btn {
      padding: 10px 20px;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
      border: none;
      transition: all 0.2s;
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
    
    .btn-outline {
      background-color: transparent;
      border: 1px solid #0066ff;
      color: #0066ff;
    }
    
    .btn-outline:hover {
      background-color: #f0f7ff;
    }
    
    .icon {
      margin-right: 5px;
    }
    
    /* Responsive styles */
    @media (max-width: 768px) {
      .confirmation-grid {
        grid-template-columns: 1fr;
        gap: 0;
      }
      
      .button-group {
        flex-direction: column;
        gap: 15px;
      }
      
      .right-buttons {
        width: 100%;
        justify-content: space-between;
      }
    }
  </style>