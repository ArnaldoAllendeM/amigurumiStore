<template>
  <div>
    <div class="container">
      <h2>Formulario de Contacto</h2>

      <div class="alert alert-success success-message" style="display: none">
        Enviado exitosamente.
      </div>

      <form id="contactForm">
        <div class="form-group">
          <label for="exampleFullName">Nombre</label>
          <input
            type="text"
            class="form-control fullname"
            id="exampleFullName"
            placeholder="Ingresa tu nombre"
            required
          />
        </div>

        <div class="form-group">
          <label for="exampleEmail">Email</label>
          <input
            type="email"
            class="form-control email"
            id="exampleEmail"
            placeholder="Ingresa tu email"
            required
          />
        </div>

        <div class="form-group">
          <label for="exampleSubject">Asunto</label>
          <input
            type="text"
            class="form-control subject"
            id="exampleSubject"
            placeholder="Ingresa el Asunto"
            required
          />
        </div>

        <div class="form-group">
          <label for="exampleMessage">Mensaje</label>
          <textarea
            class="form-control message"
            id="exampleMessage"
            placeholder="Ingresa mensaje"
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>
        <v-btn type="submit" class="btn button">Enviar</v-btn>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.button {
  background: #e74f8a !important;
  color: #ffff !important;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    background: #fb96bf !important;
    color: #fff;
  }
}
</style>