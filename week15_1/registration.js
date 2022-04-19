let input = document.querySelector("input");
                let name = document.getElementById("name");
                let surname = document.getElementById("surname");
                let email = document.getElementById("email");
                let password = document.getElementById("password1");
                let password2 = document.getElementById("password2");

                function check() {

                    document.getElementById('errorMessageName').innerHTML = "";
                    document.getElementById('errorMessageSurname').innerHTML = "";
                    document.getElementById('errorMessageEmail').innerHTML = "";
                    document.getElementById('errorMessagePassword1').innerHTML = "";
                    document.getElementById('errorMessagePassword2').innerHTML = "";

                    if (name.value == '')
                        document.getElementById('errorMessageName')
                        .innerHTML += "Введите имя<br>";

                    if (surname.value == '')
                        document.getElementById('errorMessageSurname')
                        .innerHTML += "Введите фамилию<br>";

                    if (email.value == '')
                        document.getElementById('errorMessageEmail')
                        .innerHTML += "Укажите адрес Gmail<br>";

                    if (password1.value == '')
                        document.getElementById('errorMessagePassword1')
                        .innerHTML += "Введите пароль<br>";

                    if (password1.value.length <= 5)
                        document.getElementById('errorMessagePassword1')
                        .innerHTML += "Ваш пароль слишком короткий<br>";

                    if (password2.value == '')
                        document.getElementById('errorMessagePassword2')
                        .innerHTML += "Введите пароль<br>";

                    if (password1.value != password2.value)
                        document.getElementById('errorMessagePassword2')
                        .innerHTML += "Пароли не совпадают. Повторите попытку<br>";
                }