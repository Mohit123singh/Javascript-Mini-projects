const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

const showError=(input,message) => {
  
  const ancestor=input.parentElement;
  ancestor.className='form-action error';
  const small=ancestor.querySelector('small');
  small.textContent=message;
}
const showSuccess=(input) => {
  const ancestor=input.parentElement;
  ancestor.className='form-action success';
}
const getfieldName=(input) =>input.id.charAt(0).toUpperCase() +
input.id.slice(1);

const addAction=(inputArr) => {
  
  inputArr.forEach(input => {
    if(input.value.trim()==='')
    {
      showError(input,`${getfieldName(input)} is required`)
    }
    else{
      showSuccess(input);
    }
  });
}
 const checkLength=(input,min,max) => {
  if(input.value.length < min)
  {
    showError(input,`${getfieldName(input)} must be atleast ${min} charcters `);
  }
  else if(input.value.length >max)
  {
    showError(input,`${getfieldName(input)} must be greater than ${max} charcters `);
  }
}
const passwordMatch=(input1,input2) => {
  if(input2.value.trim()!=input1.value.trim())
  {
    showError(input2,'Password do not Match');
  }
}
const CheckEmail=(input) => {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
   if(re.test(input.value.trim()))
   {
     showSuccess(input);
   }
   else{
     showError(input,'Email is not Valid');
   }
}
  const checkAppropriatePassword=(input) => {
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const symbol=/[!#$%&?@ "]/g;
  
  if(!input.value.match(lowerCaseLetters))
  {
    showError(input,`${getfieldName(input)} must contain atleast one a-z letters`);
  }
  if(!input.value.match(upperCaseLetters))
  {
    showError(input,`${getfieldName(input)} must contain atleast A-Z letters`);
  }
  if(!input.value.match(numbers))
  {
    showError(input,`${getfieldName(input)} must contain atleast 0-9 digits`);
  }
  if(!input.value.match(symbol))
  {
    showError(input,`${getfieldName(input)} must contain atleast !,#,$,%,& ,? @"`);
  }

  

}
  
 form.addEventListener('submit',event => {
  event.preventDefault();
  addAction([username,email,password,password2]);
  checkLength(username,3,16);
  checkLength(password,6,26);
  checkAppropriatePassword(password);
  passwordMatch(password,password2);
  CheckEmail(email);
  
})