        const form = document.getElementById('form');
        const campos = document.querySelectorAll('.required');
        const spans = document.querySelectorAll('.span-required')
        const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            nameValidate();
            emailValidate();
        });

        function setError(index){
            campos[index].style.border = '5px solid #e63636';
            spans[index].style.display = 'block';
        }

        function removeError(index){
            campos[index].style.border = '';
            spans[index].style.display = 'none';
        }

        function nameValidate() {
            if(campos[0].value.length < 3) 
            {
                setError(0);
            } 
            else 
            {
                removeError(0);
            }
        }

        function emailValidate(){
            if(!emailRegex.test(campos[1].value))
            {
                setError(1);
            }
            else
            {
                removeError(1);
            }
        }