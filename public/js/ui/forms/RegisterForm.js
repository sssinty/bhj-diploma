/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.register(data, (error, response) => {
      if(response.success === true) {
        App.setState('user-logged');
        document.getElementById('register-form').reset();
        const modalRegisterClose = new Modal(document.querySelector("#modal-register"));
        modalRegisterClose.onClose(document.querySelector("#modal-register"));
        User.setCurrent(response.user);
      }
    })}
}