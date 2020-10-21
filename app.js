

M.AutoInit();

  $(document).ready(function(){
    $('select').formSelect();
  });


//form submit

const inputNumber = document.querySelector('#input-number'),
      inputDescription = document.querySelector("#input-description"),
      inputAmount = document.querySelector('#input-amount'),
      inputDate= document.querySelector("#input-date"),
      inputDelivery = document.querySelector("#input-delivery"),
      inputSettle = document.querySelector("#input-settle"),
      inputOrder = document.querySelector("#input-order"),
      inputAgent = document.querySelector("#input-agent"),
      inputVat = document.querySelector("#input-vat"),
      inputCurrency = document.querySelector("#input-currency"),
      inputExchange = document.querySelector("#input-exchange"),
      inputClient = document.querySelector("#input-client"),
      invoiceForm = document.querySelector("#invoice-form"),
      invoiceButton = document.querySelector("#invoice-button");

    //   FORM EVENT 
      
      invoiceForm.addEventListener("submit", sendInvoice)

      var instance = M.FormSelect.getInstance(invoiceform);


      function sendInvoice(e){
          e.preventDefault()
          if(inputVat.value === ''){
          
            M.toast({html: 'Please fill in the Invoice Vat'})
          
          }else if(inputCurrency.value === '' ){
      
            M.toast({html: 'Please fill in the Currency'})
          }else if ( inputExchange.value === ''){
      
            M.toast({html: 'Please fill in the Exchange Rate'})  
          }else if(inputClient.value === '' ) {
          
            M.toast({html: 'Please fill in the Client name'})
           
          }else{
            // show success alert modal
            showAlert('Your invoice data is recieved.Thank you')

            // Clear each field
            inputNumber.value='';
            inputDescription.value = '';
            inputAmount.value = '';
            inputDate.value= '';
            inputDelivery.value = '';
            inputSettle.value = '';
            inputOrder.value = '';
            inputAgent.value = '';
            inputVat.value = '';
            inputCurrency.value = '';
            inputExchange.value = '';
            inputClient.value = '';

          }    
      }
     
    //   alert function
      function showAlert(msg){

        const invoiceCard = document.querySelector('.invoice-card')
        const cardForm = document.querySelector('#card-form')

        const div = document.createElement('div')
        div.className ='alert'
        div.appendChild(document.createTextNode(msg))


        invoiceCard.insertBefore(div,cardForm)


        setTimeout( function(){
            document.querySelector('.alert').remove()
        },4000)

      }