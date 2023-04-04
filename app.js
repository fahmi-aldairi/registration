let vInfo = document.getElementById("Student-regist");
let uName, uPass, uEmail, uNum;

let uData = JSON.parse(sessionStorage.getItem("uData")) || [];

vInfo.addEventListener("submit", (event) => {
  event.preventDefault();
  uName = event.target.Sname.value.toLowerCase();
  uPass = event.target.Spass.value;
  uEmail = event.target.Semail.value;
  uNum = event.target.Snum.value;

  const usernameRegex = /^\S+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const phoneRegex = /^07\d{8}$/;

  if (!usernameRegex.test(uName)) {
    alert("Username must not contain spaces.");
    return;
  }

  if (!passwordRegex.test(uPass)) {
    alert(
      "Password must be at least 8 characters long and contain at least 1 number, uppercase letter, and special character"
    );
    return;
  }

  if (!emailRegex.test(uEmail)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!phoneRegex.test(uNum)) {
    alert("Please enter a valid phone number starting with 07 and 8 number.");
    return;
  }

  inputForm.reset();

  let newRegister = new Stu(uName, uPass, uEmail, uNum);
  for (i = 0; i < uData.length; i++) {
    if (uName == uData[i].uName) {
      alert("User Exist");
      return;
    }
  }
  uData.push(newRegister);
  sessionStorage.setItem("uData", JSON.stringify(uData));
});

class Stu {
  constructor(uName, uPass, uEmail, uNum) {
    this.uName = uName;
    this.uPass = uPass;
    this.uEmail = uEmail;
    this.uNum = uNum;
  }
}
