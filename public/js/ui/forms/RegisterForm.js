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
        App.getModal('register').close();
        User.setCurrent(response.user);
      } else {
        alert(response.error)
      }
    })}
}