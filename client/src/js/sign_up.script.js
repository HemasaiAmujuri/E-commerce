 function storeData(e) {
        const name = document.getElementById("nameInput").value;
        const email = document.getElementById("emailInput").value;
        const mobile = document.getElementById("mobileInput").value;
        const date = document.getElementById("dateInput").value;
        const password = document.getElementById("passwordInput").value;
        const address = document.getElementById("addressInput").value;

        const userData = {
          userName: name,
          userEmail: email,
          userMobile: mobile,
          userDate: date,
          userPassword: password,
          userAddress: address,
        };

        console.log("user data:",userData);
      //   console.log(userDataJSON);
        const userDataJSON = JSON.stringify(userData);
        localStorage.setItem("userData", userDataJSON);

        alert("User Data saved to local storage");
        let storedData=localStorage.getItem("userData");
        const userObject = JSON.parse(storedData);
        console.log("user object",userObject)
        if(!storedData){
         console.log('Data not saved');
         alert("datanotsaved");
         return;
        }
        console.log(storedData,'from local storage');
      }