<template>
    <div class="row">
        <div class="container">
            <h2>Formulario de Contacto</h2>
            <div class="alert alert-success success-message" style="display:none;">Enviado exitosamente.</div>
            <form id="contactForm">
                <div class="form-group">
                    <label for="exampleFullName">Nombre</label>
                    <input type="text" class="form-control fullname" id="exampleFullName" placeholder="Ingresa tu nombre" required>
                </div>
                <div class="form-group">
                    <label for="exampleEmail">Email</label>
                    <input type="email" class="form-control email" id="exampleEmail" placeholder="Ingresa tu email" required>
                </div>
                <div class="form-group">
                    <label for="exampleSubject">Asunto</label>
                    <input type="text" class="form-control subject" id="exampleSubject" placeholder="Ingresa el Asunto" required>
                </div>
                <div class="form-group">
                    <label for="exampleMessage">Mensaje</label>
                    <textarea class="form-control message" id="exampleMessage" placeholder="Ingresa mensaje" cols="30" rows="10" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
    </div>
    

</template>

  
 
