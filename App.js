
    
    Parse.initialize(CONFIG.PARSE_APP_ID, CONFIG.PARSE_JS_KEY);
    Parse.serverURL = CONFIG.PARSE_SERVER_URL;

    // Pequeños helpers UI
    const $ = (s,root=document)=>root.querySelector(s);
    const form = $('#contact-form');
    const btn  = $('#submitBtn');
    const toast = $('#toast');
    const saving = $('#saving');

    function showToast(msg, ok=false){
      toast.hidden = false;
      toast.textContent = msg;
      toast.className = 'toast ' + (ok ? 'ok' : 'err');
      setTimeout(()=>{ toast.hidden = true; }, 4500);
    }

    async function saveContact({name,email,message}){
      // Clase/tabla en Back4App
      const Contact = Parse.Object.extend('Contact');
      const contact = new Contact();

      // Valores
      contact.set({ name, email, message });

      // ACL para que el registro no sea público (opcional, recomendado)
      const acl = new Parse.ACL();
      acl.setPublicReadAccess(false); // nadie puede leerlo sin permisos
      acl.setPublicWriteAccess(false); // nadie puede editarlo
      contact.setACL(acl);

      // Guardar
      return contact.save();
    }

    form.addEventListener('submit', async (ev)=>{
      ev.preventDefault();

      // Validaciones nativas HTML5
      if(!form.checkValidity()){
        form.reportValidity();
        return;
      }

      // UI bloqueando doble envío
      btn.disabled = true;
      saving.hidden = false;

      const name = $('#name').value.trim();
      const email = $('#email').value.trim();
      const message = $('#message').value.trim();

      try{
        await saveContact({name,email,message});
        form.reset();
        showToast('¡Enviado! Tu mensaje fue guardado correctamente.', true);
      }catch(err){
        console.error(err);
        showToast('Error al guardar: ' + (err?.message || 'Intenta de nuevo'));
      }finally{
        btn.disabled = false;
        saving.hidden = true;
      }
    });
