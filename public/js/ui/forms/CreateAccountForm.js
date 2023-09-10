/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(data) {
    try {
      const createCheckForm = document.querySelector("#new-account-form");
      Account.create(data);
      const modalCheck = new Modal(createCheckForm);
      modalCheck.onClose(createCheckForm);
      App.update();
      document.getElementById('new-account-form').reset();
    } catch(error) {
      console.error(error);
    }
    
  }
}